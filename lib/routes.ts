export const routes = {
  home: "/",
  meals: "/meals",
  members: "/members",
  settings: "/settings",

  expenses: {
    list: "/expenses",
    detail: (id: number) => `/expenses/${id}`,
    new: "/expenses/new",
  },

  items: {
    list: "/items",
    detail: (id: number) => `/items/${id}`,
    new: "/items/new",
  },

  settingsPages: {
    members: "/settings/members",
    pin: "/settings/pin",
    reminders: "/settings/reminders",
  },
};
