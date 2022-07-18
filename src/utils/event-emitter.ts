const events = new Map();

export const EventEmitter = {
  on(event, listener) {
    if (!events.has(event)) events.set(event, []);
    events.get(event).push(listener);
  },

  emit(event, data) {
    if (events.get(event))
      events.get(event).forEach((listener) => listener(data));
  },
};
