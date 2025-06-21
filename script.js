const songs = [
  // 1983 - Kill 'Em All [remix]
  { name: "Hit the Lights", file: "Metallica/1983 - Kill 'Em All [remix]/01. Hit the Lights.mp3" },
  { name: "The Four Horsemen", file: "Metallica/1983 - Kill 'Em All [remix]/02. The Four Horsemen.mp3" },
  { name: "Motorbreath", file: "Metallica/1983 - Kill 'Em All [remix]/03. Motorbreath.mp3" },
  { name: "Jump in the Fire", file: "Metallica/1983 - Kill 'Em All [remix]/04. Jump in the Fire.mp3" },
  { name: "(Anesthesia) - Pulling Teeth", file: "Metallica/1983 - Kill 'Em All [remix]/05. (Anesthesia) - Pulling Teeth.mp3" },
  { name: "Whiplash", file: "Metallica/1983 - Kill 'Em All [remix]/06. Whiplash.mp3" },
  { name: "Phantom Lord", file: "Metallica/1983 - Kill 'Em All [remix]/07. Phantom Lord.mp3" },
  { name: "No Remorse", file: "Metallica/1983 - Kill 'Em All [remix]/08. No Remorse.mp3" },
  { name: "Seek & Destroy", file: "Metallica/1983 - Kill 'Em All [remix]/09. Seek & Destroy.mp3" },
  { name: "Metal Militia", file: "Metallica/1983 - Kill 'Em All [remix]/10. Metal Militia.mp3" },

  // 1984 - Ride the Lightning [remix]
  { name: "Fight Fire with Fire", file: "Metallica/1984 - Ride the Lightning [remix]/01. Fight Fire with Fire.mp3" },
  { name: "Ride the Lightning", file: "Metallica/1984 - Ride the Lightning [remix]/02. Ride the Lightning.mp3" },
  { name: "For Whom the Bell Tolls", file: "Metallica/1984 - Ride the Lightning [remix]/03. For Whom the Bell Tolls.mp3" },
  { name: "Fade to Black", file: "Metallica/1984 - Ride the Lightning [remix]/04. Fade to Black.mp3" },
  { name: "Trapped Under Ice", file: "Metallica/1984 - Ride the Lightning [remix]/05. Trapped Under Ice.mp3" },
  { name: "Escape", file: "Metallica/1984 - Ride the Lightning [remix]/06. Escape.mp3" },
  { name: "Creeping Death", file: "Metallica/1984 - Ride the Lightning [remix]/07. Creeping Death.mp3" },
  { name: "The Call of Ktulu", file: "Metallica/1984 - Ride the Lightning [remix]/08. The Call of Ktulu.mp3" },

  // 1986 - Master of Puppets [remix]
  { name: "Battery", file: "Metallica/1986 - Master of Puppets [remix]/01. Battery.mp3" },
  { name: "Master of Puppets", file: "Metallica/1986 - Master of Puppets [remix]/02. Master of Puppets.mp3" },
  { name: "The Thing That Should Not Be", file: "Metallica/1986 - Master of Puppets [remix]/03. The Thing That Should Not Be.mp3" },
  { name: "Welcome Home (Sanitarium)", file: "Metallica/1986 - Master of Puppets [remix]/04. Welcome Home (Sanitarium).mp3" },
  { name: "Disposable Heroes", file: "Metallica/1986 - Master of Puppets [remix]/05. Disposable Heroes.mp3" },
  { name: "Leper Messiah", file: "Metallica/1986 - Master of Puppets [remix]/06. Leper Messiah.mp3" },
  { name: "Orion", file: "Metallica/1986 - Master of Puppets [remix]/07. Orion.mp3" },
  { name: "Damage, Inc.", file: "Metallica/1986 - Master of Puppets [remix]/08. Damage, Inc..mp3" },

  // 1988 - And Justice for All [remix]
  { name: "Blackened", file: "Metallica/1988 - And Justice for All [remix]/01. Blackened.mp3" },
  { name: "...And Justice for All", file: "Metallica/1988 - And Justice for All [remix]/02. ...And Justice for All.mp3" },
  { name: "Eye of the Beholder", file: "Metallica/1988 - And Justice for All [remix]/03. Eye of the Beholder.mp3" },
  { name: "One", file: "Metallica/1988 - And Justice for All [remix]/04. One.mp3" },
  { name: "The Shortest Straw", file: "Metallica/1988 - And Justice for All [remix]/05. The Shortest Straw.mp3" },
  { name: "Harvester of Sorrow", file: "Metallica/1988 - And Justice for All [remix]/06. Harvester of Sorrow.mp3" },
  { name: "The Frayed Ends of Sanity", file: "Metallica/1988 - And Justice for All [remix]/07. The Frayed Ends of Sanity.mp3" },
  { name: "To Live Is to Die", file: "Metallica/1988 - And Justice for All [remix]/08. To Live Is to Die.mp3" },
  { name: "Dyers Eve", file: "Metallica/1988 - And Justice for All [remix]/09. Dyers Eve.mp3" },

  // 1991 - Metallica [remix]
  { name: "Enter Sandman", file: "Metallica/1991 - Metallica [remix]/01. Enter Sandman.mp3" },
  { name: "Sad But True", file: "Metallica/1991 - Metallica [remix]/02. Sad But True.mp3" },
  { name: "Holier Than Thou", file: "Metallica/1991 - Metallica [remix]/03. Holier Than Thou.mp3" },
  { name: "The Unforgiven", file: "Metallica/1991 - Metallica [remix]/04. The Unforgiven.mp3" },
  { name: "Wherever I May Roam", file: "Metallica/1991 - Metallica [remix]/05. Wherever I May Roam.mp3" },
  { name: "Don't Tread on Me", file: "Metallica/1991 - Metallica [remix]/06. Don't Tread on Me.mp3" },
  { name: "Through the Never", file: "Metallica/1991 - Metallica [remix]/07. Through the Never.mp3" },
  { name: "Nothing Else Matters", file: "Metallica/1991 - Metallica [remix]/08. Nothing Else Matters.mp3" },
  { name: "Of Wolf and Man", file: "Metallica/1991 - Metallica [remix]/09. Of Wolf and Man.mp3" },
  { name: "The God That Failed", file: "Metallica/1991 - Metallica [remix]/10. The God That Failed.mp3" },
  { name: "My Friend of Misery", file: "Metallica/1991 - Metallica [remix]/11. My Friend of Misery.mp3" },
  { name: "The Struggle Within", file: "Metallica/1991 - Metallica [remix]/12. The Struggle Within.mp3" },

  // 1996 - Load [remix]
  { name: "Ain't My Bitch", file: "Metallica/1996 - Load [remix]/01. Ain't My Bitch.mp3" },
  { name: "2 X 4", file: "Metallica/1996 - Load [remix]/02. 2 X 4.mp3" },
  { name: "The House Jack Built", file: "Metallica/1996 - Load [remix]/03. The House Jack Built.mp3" },
  { name: "Until It Sleeps", file: "Metallica/1996 - Load [remix]/04. Until It Sleeps.mp3" },
  { name: "King Nothing", file: "Metallica/1996 - Load [remix]/05. King Nothing.mp3" },
  { name: "Hero of the Day", file: "Metallica/1996 - Load [remix]/06. Hero of the Day.mp3" },
  { name: "Bleeding Me", file: "Metallica/1996 - Load [remix]/07. Bleeding Me.mp3" },
  { name: "Cure", file: "Metallica/1996 - Load [remix]/08. Cure.mp3" },
  { name: "Poor Twisted Me", file: "Metallica/1996 - Load [remix]/09. Poor Twisted Me.mp3" },
  { name: "Wasting My Hate", file: "Metallica/1996 - Load [remix]/10. Wasting My Hate.mp3" },
  { name: "Mama Said", file: "Metallica/1996 - Load [remix]/11. Mama Said.mp3" },
  { name: "Thorn Within", file: "Metallica/1996 - Load [remix]/12. Thorn Within.mp3" },
  { name: "Ronnie", file: "Metallica/1996 - Load [remix]/13. Ronnie.mp3" },
  { name: "The Outlaw Torn", file: "Metallica/1996 - Load [remix]/14. The Outlaw Torn.mp3" },

  // 1997 - ReLoad [remix]
  { name: "Fuel", file: "Metallica/1997 - ReLoad [remix]/01. Fuel.mp3" },
  { name: "The Memory Remains", file: "Metallica/1997 - ReLoad [remix]/02. The Memory Remains.mp3" },
  { name: "Devil's Dance", file: "Metallica/1997 - ReLoad [remix]/03. Devil's Dance.mp3" },
  { name: "The Unforgiven II", file: "Metallica/1997 - ReLoad [remix]/04. The Unforgiven II.mp3" },
  { name: "Better than You", file: "Metallica/1997 - ReLoad [remix]/05. Better than You.mp3" },
  { name: "Slither", file: "Metallica/1997 - ReLoad [remix]/06. Slither.mp3" },
  { name: "Carpe Diem Baby", file: "Metallica/1997 - ReLoad [remix]/07. Carpe Diem Baby.mp3" },
  { name: "Bad Seed", file: "Metallica/1997 - ReLoad [remix]/08. Bad Seed.mp3" },
  { name: "Where the Wild Things Are", file: "Metallica/1997 - ReLoad [remix]/09. Where the Wild Things Are.mp3" },
  { name: "Prince Charming", file: "Metallica/1997 - ReLoad [remix]/10. Prince Charming.mp3" },
  { name: "Low Man's Lyric", file: "Metallica/1997 - ReLoad [remix]/11. Low Man's Lyric.mp3" },
  { name: "Attitude", file: "Metallica/1997 - ReLoad [remix]/12. Attitude.mp3" },
  { name: "Fixxxer", file: "Metallica/1997 - ReLoad [remix]/13. Fixxxer.mp3" },

  // 2000 - I Disappear [restored]
  { name: "I Disappear", file: "Metallica/2000 - I Dissappear [restored]/01. I Disappear.mp3" },

  // 2003 - St. Anger [remix]
  { name: "Frantic", file: "Metallica/2003 - St. Anger [remix]/01. Frantic.mp3" },
  { name: "St. Anger", file: "Metallica/2003 - St. Anger [remix]/02. St. Anger.mp3" },
  { name: "Some Kind of Monster", file: "Metallica/2003 - St. Anger [remix]/03. Some Kind of Monster.mp3" },
  { name: "Dirty Window", file: "Metallica/2003 - St. Anger [remix]/04. Dirty Window.mp3" },
  { name: "Invisible Kid", file: "Metallica/2003 - St. Anger [remix]/05. Invisible Kid.mp3" },
  { name: "My World", file: "Metallica/2003 - St. Anger [remix]/06. My World.mp3" },
  { name: "Shoot Me Again", file: "Metallica/2003 - St. Anger [remix]/07. Shoot Me Again.mp3" },
  { name: "Sweet Amber", file: "Metallica/2003 - St. Anger [remix]/08. Sweet Amber.mp3" },
  { name: "The Unnamed Feeling", file: "Metallica/2003 - St. Anger [remix]/09. The Unnamed Feeling.mp3" },
  { name: "Purify", file: "Metallica/2003 - St. Anger [remix]/10. Purify.mp3" },
  { name: "All Within My Hands", file: "Metallica/2003 - St. Anger [remix]/11. All Within My Hands.mp3" },

  // 2008 - Death Magnetic [remix]
  { name: "That Was Just Your Life", file: "Metallica/2008 - Death Magnetic [remix]/01. That Was Just Your Life.mp3" },
  { name: "The End of the Line", file: "Metallica/2008 - Death Magnetic [remix]/02. The End of the Line.mp3" },
  { name: "Broken, Beat & Scarred", file: "Metallica/2008 - Death Magnetic [remix]/03. Broken, Beat & Scarred.mp3" },
  { name: "The Day That Never Comes", file: "Metallica/2008 - Death Magnetic [remix]/04. The Day That Never Comes.mp3" },
  { name: "All Nightmare Long", file: "Metallica/2008 - Death Magnetic [remix]/05. All Nightmare Long.mp3" },
  { name: "Cyanide", file: "Metallica/2008 - Death Magnetic [remix]/06. Cyanide.mp3" },
  { name: "The Unforgiven III", file: "Metallica/2008 - Death Magnetic [remix]/07. The Unforgiven III.mp3" },
  { name: "The Judas Kiss", file: "Metallica/2008 - Death Magnetic [remix]/08. The Judas Kiss.mp3" },
  { name: "Suicide & Redemption", file: "Metallica/2008 - Death Magnetic [remix]/09. Suicide & Redemption.mp3" },
  { name: "My Apocalypse", file: "Metallica/2008 - Death Magnetic [remix]/10. My Apocalypse.mp3" },

  // 2011 - Beyond Magnetic [remix]
  { name: "Hate Train", file: "Metallica/2011 - Beyond Magnetic [remix]/01. Hate Train.mp3" },
  { name: "Just a Bullet Away", file: "Metallica/2011 - Beyond Magnetic [remix]/02. Just a Bullet Away.mp3" },
  { name: "Hell and Back", file: "Metallica/2011 - Beyond Magnetic [remix]/03. Hell and Back.mp3" },
  { name: "Rebel of Babylon", file: "Metallica/2011 - Beyond Magnetic [remix]/04. Rebel of Babylon.mp3" },

  // 2016 - Hardwired...to Self-Destruct [remix]
  { name: "Hardwired", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/01. Hardwired.mp3" },
  { name: "Atlas, Rise!", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/02. Atlas, Rise!.mp3" },
  { name: "Now That We're Dead", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/03. Now That We're Dead.mp3" },
  { name: "Moth Into Flame", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/04. Moth Into Flame.mp3" },
  { name: "Dream No More", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/05. Dream No More.mp3" },
  { name: "Halo on Fire", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/06. Halo on Fire.mp3" },
  { name: "Confusion", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/07. Confusion.mp3" },
  { name: "ManUNkind", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/08. ManUNkind.mp3" },
  { name: "Here Comes Revenge", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/09. Here Comes Revenge.mp3" },
  { name: "Am I Savage?", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/10. Am I Savage?.mp3" },
  { name: "Murder One", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/11. Murder One.mp3" },
  { name: "Spit Out the Bone", file: "Metallica/2016 - Hardwired...to Self-Destruct [remix]/12. Spit Out the Bone.mp3" },

  // 2023 - 72 Seasons
  { name: "72 Seasons", file: "Metallica/2023 - 72 Seasons/01. 72 Seasons.mp3" },
  { name: "Shadows Follow", file: "Metallica/2023 - 72 Seasons/02. Shadows Follow.mp3" },
  { name: "Screaming Suicide", file: "Metallica/2023 - 72 Seasons/03. Screaming Suicide.mp3" },
  { name: "Sleepwalk My Life Away", file: "Metallica/2023 - 72 Seasons/04. Sleepwalk My Life Away.mp3" },
  { name: "You Must Burn!", file: "Metallica/2023 - 72 Seasons/05. You Must Burn!.mp3" },
  { name: "Lux Æterna", file: "Metallica/2023 - 72 Seasons/06. Lux Æterna.mp3" },
  { name: "Crown of Barbed Wire", file: "Metallica/2023 - 72 Seasons/07. Crown of Barbed Wire.mp3" },
  { name: "Chasing Light", file: "Metallica/2023 - 72 Seasons/08. Chasing Light.mp3" },
  { name: "If Darkness Had a Son", file: "Metallica/2023 - 72 Seasons/09. If Darkness Had a Son.mp3" },
  { name: "Too Far Gone?", file: "Metallica/2023 - 72 Seasons/10. Too Far Gone?.mp3" },
  { name: "Room of Mirrors", file: "Metallica/2023 - 72 Seasons/11. Room of Mirrors.mp3" },
  { name: "Inamorata", file: "Metallica/2023 - 72 Seasons/12. Inamorata.mp3" }
];

const albumCoverMap = {
  "Kill 'Em All": "Album_covers/Kill_'Em_All.jpg",
  "Ride the Lightning": "Album_covers/Ride_The_Lightning.png",
  "Master of Puppets": "Album_covers/Master_of_Puppets.jpg",
  "And Justice for All": "Album_covers/And_Justice_for_All.jpg",
  "Metallica": "Album_covers/The_Black_Album.jpg",
  "Load": "Album_covers/Load.jpg",
  "ReLoad": "Album_covers/Reload.jpg",
  "I Dissappear": "Album_covers/I_Disappear.jpg",
  "St. Anger": "Album_covers/St._Anger.jpg",
  "Death Magnetic": "Album_covers/Death_Magnetic.jpg",
  "Beyond Magnetic": "Album_covers/Beyond_Magnetic.jpeg",
  "Hardwired...to Self-Destruct": "Album_covers/Hardwired.jpeg",
  "72 Seasons": "Album_covers/72_Seasons.jpg"
};

function getAlbumName(song) {
  const match = song.file.match(/Metallica\/\d{4} - (.+?) \[/);
  if (match) return match[1];
  if (song.file.includes("I Dissappear")) return "I Dissappear";
  if (song.file.includes("72 Seasons")) return "72 Seasons";
  return "";
}

const coverContainer  = document.getElementById("songCovers");
const playChoiceBtn   = document.getElementById("playChoiceBtn");
const audioPlayer     = document.getElementById("audioPlayer");

let displayedIndices  = [];
let currentSnippetIdx = null;   // index into `songs`
let currentStartTime  = null;   // where we start the 5s clip
let snippetTimeout    = null;   // to clear the pending pause()

// Play exactly 5 seconds from `file` at `currentStartTime`
function playSnippet() {
  // stop and clear anything pending
  clearTimeout(snippetTimeout);
  audioPlayer.pause();

  // set up new source
  const song = songs[currentSnippetIdx];
  audioPlayer.src = song.file;
  audioPlayer.load();

  // Error handling for loading
  audioPlayer.onerror = function() {
    alert("⚠️ Could not load audio: " + song.file);
    console.error("Audio load error:", song.file, audioPlayer.error);
  };

  // once metadata is ready, we know duration
  audioPlayer.onloadedmetadata = () => {
    const maxStart = Math.max(0, audioPlayer.duration - 5);

    // on first play, pick random; on replay, reuse
    if (currentStartTime === null) {
      currentStartTime = Math.random() * maxStart;
    }

    audioPlayer.currentTime = currentStartTime;
    const playPromise = audioPlayer.play();

    // schedule an exact 5s stop
    snippetTimeout = setTimeout(() => {
      audioPlayer.pause();
    }, 5000);

    // Log if play() fails (autoplay policy, etc)
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        alert("⚠️ Audio playback failed: " + err.message);
        console.error("Audio play error:", err);
      });
    }
  };
}

// Pick + render three covers, reset the round
function renderRandomCovers() {
  coverContainer.innerHTML = "";
  displayedIndices = [];
  currentSnippetIdx = null;
  currentStartTime  = null;
  clearTimeout(snippetTimeout);
  audioPlayer.pause();

  // pick three unique songs
  while (displayedIndices.length < 3) {
    const idx = Math.floor(Math.random() * songs.length);
    if (!displayedIndices.includes(idx)) displayedIndices.push(idx);
  }

  displayedIndices.forEach(songIdx => {
    const song  = songs[songIdx];
    const album = getAlbumName(song);
    const cover = albumCoverMap[album] || "";

    const div = document.createElement("div");
    div.className = "cover-container";
    div.innerHTML = `
      <img src="${cover}" alt="${album}">
      <div class="cover-title">${song.name}</div>
    `;

    div.addEventListener("click", () => {
      if (currentSnippetIdx === null) return;

      // immediate stop
      clearTimeout(snippetTimeout);
      audioPlayer.pause();

      if (songIdx === currentSnippetIdx) {
        alert(`✅ Correct! It was “${song.name}”`);
      } else {
        alert(`❌ Nope—it was “${songs[currentSnippetIdx].name}”`);
      }
      renderRandomCovers();
    });

    coverContainer.appendChild(div);
  });
}

// Play / replay button logic
playChoiceBtn.addEventListener("click", () => {
  if (currentSnippetIdx === null) {
    // start a new round
    currentSnippetIdx = displayedIndices[
      Math.floor(Math.random() * displayedIndices.length)
    ];
    currentStartTime = null;
  }
  playSnippet();
});

// initial draw
renderRandomCovers();