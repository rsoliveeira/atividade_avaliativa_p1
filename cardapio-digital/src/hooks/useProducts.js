// ajuste: hook agora aceita termo de busca (nome ou ID)
// - se for número, busca /products/:id e retorna somente 1 item
// - se for texto, busca /products?name= e pode reduzir ao match exato

import { useEffect, useState, useCallback } from 'react';
import { API_URL } from '../data/config'; // ajuste: usa a URL já configurada no projeto

async function fetchById(id) {
  const resp = await fetch(`${API_URL}/products/${id}`);
  if (!resp.ok) {
    if (resp.status === 404) return null;
    throw new Error('Falha ao buscar produto por ID');
  }
  const json = await resp.json();
  return json?.data ?? null;
}

async function fetchByName(name) {
  const qs = encodeURIComponent(name);
  const resp = await fetch(`${API_URL}/products?name=${qs}`);
  if (!resp.ok) throw new Error('Falha ao listar produtos');
  const json = await resp.json();
  return json?.data ?? [];
}

async function fetchAll() {
  const resp = await fetch(`${API_URL}/products`);
  if (!resp.ok) throw new Error('Falha ao listar produtos');
  const json = await resp.json();
  return json?.data ?? [];
}

export function useProducts(search = '') {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      let data = [];

      const q = String(search || '').trim();

      if (!q) {
        // sem busca -> lista tudo
        data = await fetchAll();
      } else if (/^\d+$/.test(q)) {
        // busca por ID -> retorna somente o item correspondente
        const one = await fetchById(q);
        data = one ? [one] : [];
      } else {
        // busca por nome -> pega lista e mantém somente o item correspondente (match exato, case-insensitive)
        const list = await fetchByName(q);
        const exact = list.find((p) => String(p.name).toLowerCase() === q.toLowerCase());
        data = exact ? [exact] : [];
      }

      setItems(data);
    } catch (e) {
      setError(e.message || 'Falha ao carregar produtos');
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    load();
  }, [load]);

  return { items, loading, error, reload: load };
}
