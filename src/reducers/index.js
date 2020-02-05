import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      mood: "Happy",
      bg:
        "https://images.pexels.com/photos/858076/pexels-photo-858076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      duration: "4:05",
      song1: "JAMES BROWN - I FEEL GOOD",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/119046003&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      song2: "PHARELL WILLIAMS - HAPPY",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132774758&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "THE SALFAM GROUP - MACARENA",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2525977&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "BLACK EYED PEAS - I GOTTA FEELING",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/16480693&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "BOB MARLEY - DON'T WORRY BE HAPPY",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/144550744&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "Sad",
      bg:
        "https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      duration: "4:05",
      song1: "GORILLAZ - FEEL GOOD",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231321623&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      song2: "EMINEM ft DIDO - STAN",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/235029889&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "BILLIE EILISH - WHEN THE PARTY'S OVER",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/393494739&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "GREAT BIG WORLD ft CHRISTIANA AGUILERA - SAY SOMETHING",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/325121030&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "WE THE KINGS ft ELENA COATS - SAD SONG",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/279065232&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "Funky",
      bg:
        "https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      duration: "4:05",
      song1: "MARK RONSON ft BRUNO MARS - UPTOWN FUNK",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/183543302&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song2: "AHA - TAKE ON ME",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191122274&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "DAFT PUNK - GET LUCKY",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/88335161&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "JAMES BROWN - GET UP SEX MACHINE",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/149339356&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "RICK JAMES - SUPER FREAK",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/152227790&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "Heart Break",
      bg:
        "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      duration: "4:05",
      song1: "ADELE - SOMEONE LIKE YOU",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34517808&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song2: "SHONTELLE - IMPOSSIBLE",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/17256887&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "SAM SMITH - I'M NOT THE ONLY ONE",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/160928696&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "BRUNO MARS - GRENADE",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100560677&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "SIA - BIG GIRLS CRY",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/155983517&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "Romantic",
      bg:
        "https://images.pexels.com/photos/810036/pexels-photo-810036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      duration: "4:05",
      song1: "JOHN LEGEND - ALL OF ME",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/113662676&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song2: "ED SHEREEN - PHOTOGRAPH",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/210002474&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "ED SHEREEN - PERFECT",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310640631&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "MADILYN PAIGE - IRREPLACEABLE",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174445349&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "BRUNO MARS - JUST THE WAY YOU ARE",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/29051293&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      mood: "Happy",
      bg:
        "https://images.pexels.com/photos/858076/pexels-photo-858076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      duration: "4:05",
      song1: "JAMES BROWN - I FEEL GOOD",
      song1Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/119046003&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      song2: "PHARELL WILLIAMS - HAPPY",
      song2Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132774758&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song3: "THE SALFAM GROUP - MACARENA",
      song3Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2525977&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song4: "BLACK EYED PEAS - I GOTTA FEELING",
      song4Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/16480693&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

      song5: "BOB MARLEY - DON'T WORRY BE HAPPY",
      song5Url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/144550744&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    }
  ];
};

const Playlist = () => {
  return {
    song1: "JAMES BROWN - I FEEL GOOD",
    song1Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/119046003&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    song2: "PHARELL WILLIAMS - HAPPY",
    song2Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132774758&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song3: "THE SALFAM GROUP - MACARENA",
    song3Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2525977&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song4: "BLACK EYED PEAS - I GOTTA FEELING",
    song4Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/16480693&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song5: "BOB MARLEY - DON'T WORRY BE HAPPY",
    song5Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/144550744&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    song6: "GORILLAZ - FEEL GOOD",
    song6Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231321623&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    song7: "EMINEM ft DIDO - STAN",
    song7Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/235029889&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song8: "BILLIE EILISH - WHEN THE PARTY'S OVER",
    song8Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/393494739&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song9: "GREAT BIG WORLD ft CHRISTIANA AGUILERA - SAY SOMETHING",
    song9Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/325121030&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song10: "WE THE KINGS ft ELENA COATS - SAD SONG",
    song10Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/279065232&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    song11: "MARK RONSON ft BRUNO MARS - UPTOWN FUNK",
    song11Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/183543302&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song12: "AHA - TAKE ON ME",
    song12Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191122274&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song13: "DAFT PUNK - GET LUCKY",
    song13Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/88335161&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song14: "JAMES BROWN - GET UP SEX MACHINE",
    song14Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/149339356&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song15: "RICK JAMES - SUPER FREAK",
    song15Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/152227790&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    song16: "JOHN LEGEND - ALL OF ME",
    song16Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/113662676&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song17: "ED SHEREEN - PHOTOGRAPH",
    song17Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/210002474&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song18: "ED SHEREEN - PERFECT",
    song18Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310640631&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song19: "MADILYN PAIGE - IRREPLACEABLE",
    song19Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174445349&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song20: "BRUNO MARS - JUST THE WAY YOU ARE",
    song20Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/29051293&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    song21: "ADELE - SOMEONE LIKE YOU",
    song21Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34517808&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song22: "SHONTELLE - IMPOSSIBLE",
    song22Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/17256887&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song23: "SAM SMITH - I'M NOT THE ONLY ONE",
    song23Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/160928696&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song24: "BRUNO MARS - GRENADE",
    song24Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100560677&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",

    song25: "SIA - BIG GIRLS CRY",
    song25Url:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/155983517&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
  };
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  playlist: Playlist,
  selectedSong: selectedSongReducer
});
