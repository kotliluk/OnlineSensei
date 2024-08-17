/**
 * App translation.
 */
import { Language } from './index'


export interface Translation {
  language: string
  languageShort: Language
  common: {
    darkTheme: string,
    lightTheme: string,
    language: string,
    time: string,
    fight: string,
    sound: string,
    noSound: string,
    // user actions
    back: string,
    finished: string,
    pause: string,
    paused: string,
    reset: string,
    resume: string,
    start: string,
    stop: string,
    cancel: string,
  }
  mainPage: {
    appIntroduction: string,
    availableFeatures: string,
    reactions: {
      annotation: string,
      link: string,
    },
    kumiteTimer: {
      annotation: string,
      link: string,
    },
    intervalTimer: {
      annotation: string,
      link: string,
    },
  }
  reactions: {
    setUpScreen: {
      heading: string,
      rounds: {
        label: string,
        // 2 params
        error: string,
      },
      signalDuration: {
        label: string,
        // 2 params
        error: string,
      },
      minInterval: {
        label: string,
        // 2 params
        error: string,
        rangeError: string,
      },
      maxInterval: {
        label: string,
        // 2 params
        error: string,
        rangeError: string,
      },
      signalCount: {
        label: string,
      },
      signalColor: {
        label: string,
      },
    },
    playScreen: {
      heading: string,
      round: string,
    },
  }
  kumiteTimer: {
    setUpScreen: {
      heading: string,
      duration: {
        label: string,
        // 2 params
        error: string,
      },
      tournament: {
        label: string,
        newTournament: string,
        name: string,
        resumeTournament: string,
        types: {
          label: string,
          tree: string,
          group: string,
        },
        competitorsCount: {
          label: string,
          // error
          error: string,
        },
        shuffleCompetitors: string,
        competitors: string,
      },
    },
    timerScreen: {
      saveTournamentFight: string,
    },
  }
  intervalTimer: {
    setUpScreenSimple: {
      heading: string,
      rounds: {
        label: string,
        // 2 params
        error: string,
      },
      workInterval: {
        label: string,
        // 2 params
        error: string,
      },
      pauseInterval: {
        label: string,
        // 2 params
        error: string,
      },
      skipLastPause: {
        label: string,
      },
      advancedSettingsBtn: string,
    },
    setUpScreenAdvanced: {
      heading: string,
      intervalInSeriesSubheading: string,
      intervalInSeries: {
        type: {
          label: string,
          work: string,
          pause: string,
        },
        name: string,
        duration: {
          label: string,
          // 2 params
          error: string,
        },
      },
      addIntervalInSeriesBtn: string,
      loadSeries: string,
      noSeries: string,
      saveSeries: string,
      seriesName: string,
      duplicateSeriesNameError: string,
      series: {
        label: string,
        // 2 params
        error: string,
      },
      skipLastPause: {
        label: string,
      },
      basicSettingsBtn: string,
    },
    playScreen: {
      heading: string,
      work: string,
    },
  }
}
