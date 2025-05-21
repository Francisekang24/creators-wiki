export type Locale = "en" | "es" | "fr" | "pt" | "it"

export type Dictionary = {
  common: {
    appName: string
    search: string
    loading: string
    error: string
    notFound: string
    save: string
    cancel: string
    edit: string
    delete: string
    submit: string
    next: string
    previous: string
    viewAll: string
    followers: string
    following: string
    joinedOn: string
  }
  navigation: {
    home: string
    creators: string
    events: string
    collaborations: string
    settings: string
    signIn: string
    signOut: string
  }
  regions: {
    western: string
    africa: string
    asia: string
    middleEast: string
    northAmerica: string
    europe: string
    southAmerica: string
    oceania: string
  }
  platforms: {
    youtube: string
    twitch: string
    instagram: string
    twitter: string
    tiktok: string
    facebook: string
  }
  home: {
    title: string
    subtitle: string
    searchPlaceholder: string
    filters: string
    featuredCreators: string
    upcomingEvents: string
    recentlyAdded: string
    creatorsAttending: string
    viewAllCreators: string
    viewAllEvents: string
  }
  creators: {
    title: string
    subtitle: string
    searchPlaceholder: string
    filters: string
    sortBy: string
    sortOptions: {
      newest: string
      oldest: string
      followersHigh: string
      followersLow: string
    }
    filterCategories: {
      regions: string
      platforms: string
      contentCategories: string
    }
    contentCategories: {
      tech: string
      gaming: string
      beauty: string
      cooking: string
      music: string
    }
    applyFilters: string
  }
  creatorProfile: {
    about: string
    events: string
    collaborations: string
    comments: string
    socialPlatforms: string
    topic: string
    eventsParticipated: string
    collaboratedWith: string
    communityFeedback: string
    addComment: string
    postComment: string
    viewAllComments: string
    viewAllEvents: string
    viewAllCollaborations: string
    collaborationNetwork: string
    networkVisualization: string
    followOn: string
    from: string
    reply: string
  }
  events: {
    title: string
    subtitle: string
    searchPlaceholder: string
    upcomingEvents: string
    pastEvents: string
    calendarView: string
    filters: string
    filterCategories: {
      eventType: string
      regions: string
      dateRange: string
    }
    eventTypes: {
      conference: string
      summit: string
      expo: string
      festival: string
      workshop: string
    }
    dateRange: {
      from: string
      to: string
    }
    sortOptions: {
      dateAsc: string
      dateDesc: string
      attendeesHigh: string
      attendeesLow: string
    }
    creatorsAttending: string
    calendarComingSoon: string
    pastEventsComingSoon: string
    applyFilters: string
  }
  collaborations: {
    title: string
    subtitle: string
    searchPlaceholder: string
    topCollaborations: string
    collaborationNetwork: string
    networkDescription: string
    networkVisualization: string
    filters: string
    filterCategories: {
      regions: string
      contentCategories: string
      collaborationCount: string
    }
    collaborationCount: {
      low: string
      medium: string
      high: string
    }
    sortOptions: {
      countDesc: string
      countAsc: string
      recent: string
      oldest: string
    }
    collaborations: string
    latestProject: string
    viewCollaborationDetails: string
    applyFilters: string
  }
  settings: {
    title: string
    subtitle: string
    language: string
    languagePreference: string
    languageDescription: string
    languages: {
      en: string
      es: string
      fr: string
      pt: string
      it: string
      auto: string
    }
    theme: string
    themePreference: string
    themeDescription: string
    themes: {
      light: string
      dark: string
      system: string
    }
    notifications: string
    notificationPreferences: string
    notificationDescription: string
    notificationTypes: {
      newCollaborations: string
      upcomingEvents: string
      creatorUpdates: string
      mentions: string
    }
    account: string
    accountSettings: string
    accountDescription: string
    profile: string
    privacy: string
    security: string
    saveChanges: string
    resetDefaults: string
  }
}
