import type { APIRoute } from 'astro';
import events from '../data/events.json';

export const getEvents = () => {
  return events;
};
