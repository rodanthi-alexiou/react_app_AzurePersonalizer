import React, {useState} from 'react'
import './App.css';
import DialogSelect from './DialogSelect'
import Card from './Card'
import { Button, Input, MenuItem, FormControl, Select, InputLabel } from "@material-ui/core";


//  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
 


var images = ['https://i.scdn.co/image/ab67616d0000b273664034dd80e91b28f773598d', 'https://i.scdn.co/image/ab67616d0000b273764ac25ee0d41190d513475a', 'https://i.scdn.co/image/ab67616d0000b27318ff322fcdd47c9400872da6', 'https://i.scdn.co/image/ab67616d0000b273908280d9807127e185b71d56', 'https://i.scdn.co/image/ab67616d0000b273175715816616d0fb317fabeb', 'https://i.scdn.co/image/ab67616d0000b27349caa4fc6f962057ba65576a', 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431', 'https://i.scdn.co/image/ab67616d0000b2736f9e6abbd6fa43ac3cdbeee0', 'https://i.scdn.co/image/ab67616d0000b27384350b406522fc53c1b2a621', 'https://i.scdn.co/image/ab67616d0000b2739109b0425fb5b36284a24891', 'https://i.scdn.co/image/ab67616d0000b2735a61e19eaffec620c1899c47', 'https://i.scdn.co/image/ab67616d0000b273a6c1dea2b83a2309d9e0adc3', 'https://i.scdn.co/image/ab67616d0000b273bc2dd68b840bb48db3177046', 'https://i.scdn.co/image/ab67616d0000b273d619b8baab0619516bb53804', 'https://i.scdn.co/image/ab67616d0000b2739aeed9bbffaac4c99cc4c4d9', 'https://i.scdn.co/image/ab67616d0000b273df16d539f508603bfb1efe02', 'https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464', 'https://i.scdn.co/image/ab67616d0000b273815cb538fd7821595b2bc8c5', 'https://i.scdn.co/image/ab67616d0000b273a954408e456d4d9d410f448b', 'https://i.scdn.co/image/ab67616d0000b273044a5466dac00f7b3c570b99', 'https://i.scdn.co/image/ab67616d0000b273f461bbc21a9bcec43a926973', 'https://i.scdn.co/image/ab67616d0000b27380008454152dadb9880feac0', 'https://i.scdn.co/image/ab67616d0000b2739a95e89d24214b94de36ccf7', 'https://i.scdn.co/image/ab67616d0000b2735a7f21dad5c796d719650972', 'https://i.scdn.co/image/ab67616d0000b2737379008b8d76b2c65323fed7', 'https://i.scdn.co/image/ab67616d0000b27382b243023b937fd579a35533', 'https://i.scdn.co/image/ab67616d0000b273f1462ebfec5f96421f44dcd3', 'https://i.scdn.co/image/ab67616d0000b273664034dd80e91b28f773598d', 'https://i.scdn.co/image/ab67616d0000b2737a6987208a80b09a58e92d9a', 'https://i.scdn.co/image/ab67616d0000b273e465904fbcc8de1920c60867', 'https://i.scdn.co/image/ab67616d0000b273bf01fd0986a195d485922167', 'https://i.scdn.co/image/ab67616d0000b2736b44f0f5a3e3b56f89e5083b', 'https://i.scdn.co/image/ab67616d0000b2733ef0781922e2dfb0679237ca', 'https://i.scdn.co/image/ab67616d0000b2730be3514a5b184c135a27d7f1', 'https://i.scdn.co/image/ab67616d0000b273fdec91537c467efa0cd75e2f', 'https://i.scdn.co/image/ab67616d0000b2739ebc0c83866027b929b40be8', 'https://i.scdn.co/image/ab67616d0000b2736036cfd2a718036fc523855f', 'https://i.scdn.co/image/ab67616d0000b2733097b1375ab17ae5bf302a0a', 'https://i.scdn.co/image/ab67616d0000b273632e5aeca45b4cf0b9c08fcc', 'https://i.scdn.co/image/ab67616d0000b273b6567be9f8b996a2b5f9b7fa', 'https://i.scdn.co/image/ab67616d0000b2735ef878a782c987d38d82b605', 'https://i.scdn.co/image/ab67616d0000b27359779689e1d9c15ca2f76b84', 'https://i.scdn.co/image/ab67616d0000b27325e1a02097987b3480c7a8c5', 'https://i.scdn.co/image/ab67616d0000b27384c53fa832dfa265192419c5', 'https://i.scdn.co/image/ab67616d0000b27334c8199b0b3b3fb42b8a98a8', 'https://i.scdn.co/image/ab67616d0000b2737a152619a7b55bc621d07901', 'https://i.scdn.co/image/ab67616d0000b2738b11b0be988e17da2799b94d', 'https://i.scdn.co/image/ab67616d0000b2735af0305457ff290e06dcc4c2'];
var urls = ['https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy', 'https://open.spotify.com/track/37BZB0z9T8Xu7U3e65qxFy'];
var names = ['MONTERO (Call Me By Your Name)','Save Your Tears (with Ariana Grande) (Remix)','Heartbreak Anniversary','Kiss Me More (feat. SZA)',
'RAPSTAR','Levitating (feat. DaBaby)','Peaches (feat. Daniel Caesar & Giveon)','Leave The Door Open','Astronaut In The Ocean',
'Goosebumps - Remix','deja vu','Beautiful Mistakes (feat. Megan Thee Stallion)','Hold On','Up','Best Friend (feat. Doja Cat)','WITHOUT YOU','Heat Waves',
'Friday (feat. Mufasa & Hypeman) - Dopamine Re-Edit','Arcade','telepatía','The Business','Fiel','My Head & My Heart','GIRL LIKE ME','Met Him Last Night (feat. Ariana Grande)',
'Streets','Your Love (9PM)','You','Runaway','Cover Me In Sunshine','BED','Good Without','Girls Like Us','Otra Noche Sin Ti','On The Ground','Shy Away',
'As I Am (feat. Khalid)','Good Days','Wasted Love (feat. Lagique)','Paradise (feat. Dermot Kennedy)','34+35','drivers license','Follow You','Mood (feat. iann dior)',
'DÁKITI','Therefore I Am','Baila Conmigo (with Rauw Alejandro)','Calling My Phone','Whats Next']

const uuidv1 = 4;
const Personalizer = require('@azure/cognitiveservices-personalizer');
const CognitiveServicesCredentials = require('@azure/ms-rest-azure-js').CognitiveServicesCredentials;


// The key specific to your personalization service instance; e.g. "0123456789abcdef0123456789ABCDEF"
const serviceKey = "4da738bedf0741e78637ce423d7cea7f";

// The endpoint specific to your personalization service instance; 
// e.g. https://<your-resource-name>.cognitiveservices.azure.com
const baseUri = "https://musicrec.cognitiveservices.azure.com";


const credentials = new CognitiveServicesCredentials(serviceKey);

// Initialize Personalization client.
const personalizerClient = new Personalizer.PersonalizerClient(credentials, baseUri);

function getContextFeaturesList(array) {
  
  console.log([
    {
      "time": array[0]
    },
    {
      "taste": array[1]
    }
  ]);

  return [
    {
      "time": array[0]
    },
    {
      "taste": array[1]
    }
  ];
}



function getActionsList() {

  

  var json = require('./data.json');
  console.log(json);
  var songs = [];
  for (var i = 0; i < 49; i++) {
    var characteristics = [];
    characteristics.push(json[i]);
    songs.push({id: names[i], features: characteristics});
  } 
  console.log(songs);
  return songs;
}




function App() {

  const [context, setContext] = useState([]);
  const [open, setOpen] = useState(false);
  const [song, setSong] = useState([]);
  const [reward, setReward] = useState(0);
  const [restart, setRestart] = useState(false);
  const [rankRequest1, setRankRequest1] = useState({});

  async function getRec() {
    let rankRequest = {}

    // Generate an ID to associate with the request.
    rankRequest.eventId = "4";

    // Get context information from the user.
    rankRequest.contextFeatures = getContextFeaturesList(context);

    // Get the actions list to choose from personalization with their features.
    rankRequest.actions = getActionsList();

    // Exclude an action for personalization ranking. This action will be held at its current position.
    //rankRequest.excludedActions = getExcludedActionsList();

    rankRequest.deferActivation = false;

    // Rank the actions
    const rankResponse = await personalizerClient.rank(rankRequest);

    console.log("\nPersonalization service thinks you would like to have:\n")
    console.log(rankResponse.rewardActionId);
    setSong(rankResponse.rewardActionId)
    console.log(names.indexOf(rankResponse.rewardActionId));
    setOpen(true);
    setRankRequest1(rankRequest);
  }

  async function getReward(reward_value){


    const rewardRequest = {
      value: reward_value
    }
    
    await personalizerClient.events.reward(rankRequest1.eventId, rewardRequest);

    console.log("The reward worked!")
  }




  
  return (
    <div className="App">

    <div className="body"> 


            
            {open ? (
              <Card song={song} image_url={images[names.indexOf(song)]} reward={getReward} setOpen={setOpen}/>

            ):(
              <div className="card">
                <DialogSelect cont={setContext}/>
                <button class="big-button" onClick={() => {getRec()}}>Get Recommendation</button>
               </div> 
                )}
          
            
    </div>
    </div>
  );
}

export default App;
