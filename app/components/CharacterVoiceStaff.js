"use client";

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchAnimeData } from '../actions/aniListFetch'; 

export default function CharacterVoiceStaff({ animeId }) {
  const defaultId = 16498;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const id = animeId || defaultId;
      setLoading(true);
      try {
        const animeData = await fetchAnimeData(id);
        if (!animeData) {
          throw new Error('Failed to fetch anime data');
        }
        setData(animeData);
        setError(null);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch data. Please check your connection or try again later.');
        setLoading(false);
      }
    }

    fetchData();
  }, [animeId]);

  const characterItems = useMemo(() => {
    const edges = data?.characters?.edges || [];
    const byId = new Map();

    for (const edge of edges) {
      const node = edge?.node;
      if (!node?.id) continue;

      if (!byId.has(node.id)) {
        byId.set(node.id, {
          id: node.id,
          name: node?.name?.full || 'Unknown Character',
          image: node?.image?.large || '/placeholder.jpg',
          voiceActors: new Map(),
        });
      }

      const current = byId.get(node.id);
      for (const actor of edge?.voiceActors || []) {
        if (!actor?.id) continue;
        if (!current.voiceActors.has(actor.id)) {
          current.voiceActors.set(actor.id, {
            id: actor.id,
            name: actor?.name?.full || 'Unknown Voice Actor',
          });
        }
      }
    }

    return Array.from(byId.values()).map((item) => ({
      ...item,
      voiceActors: Array.from(item.voiceActors.values()),
    }));
  }, [data]);

  const staffItems = useMemo(() => {
    const edges = data?.staff?.edges || [];
    const byId = new Map();

    for (const edge of edges) {
      const node = edge?.node;
      if (!node?.id) continue;

      if (!byId.has(node.id)) {
        byId.set(node.id, {
          id: node.id,
          name: node?.name?.full || 'Unknown Staff',
          image: node?.image?.large || '/placeholder.jpg',
          roles: new Set(),
        });
      }

      const current = byId.get(node.id);
      const role = String(edge?.role || '').trim();
      if (role) {
        current.roles.add(role);
      }
    }

    return Array.from(byId.values()).map((item) => ({
      ...item,
      roles: Array.from(item.roles),
    }));
  }, [data]);

  if (loading) {
    return (
      <div className="bg-gray-900 p-4 rounded-lg shadow-md animate-pulse">
        <div className="w-full h-6 bg-gray-700 rounded mb-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-3 bg-gray-800 p-2 rounded-lg">
              <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
              <div className="flex flex-col space-y-2">
                <div className="w-24 h-4 bg-gray-700 rounded"></div>
                <div className="w-16 h-3 bg-gray-600 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 md:p-5">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-semibold">Characters & Voice Actors</h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-1">Featured cast and Japanese voice actors</p>
        </div>
        <span className="text-xs text-purple-300 bg-purple-500/15 px-2.5 py-1 rounded-full">
          {characterItems.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {characterItems.map((item) => (
          <article key={item.id} className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3 flex items-center gap-3 hover:border-purple-500/50 transition-colors">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500/50 shrink-0">
              <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate" title={item.name}>{item.name}</p>
              <p className="text-zinc-400 text-xs truncate" title={item.voiceActors[0]?.name || 'No voice actor listed'}>
                VA: {item.voiceActors[0]?.name || 'No voice actor listed'}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-end justify-between mt-8 mb-4">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-semibold">Staff</h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-1">Deduplicated contributors with merged roles</p>
        </div>
        <span className="text-xs text-purple-300 bg-purple-500/15 px-2.5 py-1 rounded-full">
          {staffItems.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {staffItems.map((item) => (
          <article key={item.id} className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3 flex items-center gap-3 hover:border-purple-500/50 transition-colors">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500/50 shrink-0">
              <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate" title={item.name}>{item.name}</p>
              <p
                className="text-zinc-400 text-xs truncate"
                title={item.roles.length ? item.roles.join(' • ') : 'Role not listed'}
              >
                {item.roles.length ? item.roles.join(' • ') : 'Role not listed'}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
