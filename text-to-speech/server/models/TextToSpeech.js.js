const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

class TextToSpeech {

    criaAudio(criaAudioId, criaAudioComentario) {
        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                apikey: 'EfGp_0Q4k9hmraLawJqwK2eWVyLhVwWeN8S9tFxUuoqG',
            }),
            serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/e7a47b60-4d01-4fc0-811a-7d0cfbe9cd6d',
        });

        const synthesizeParams = {
            text: `${criaAudioComentario}`,
            accept: 'audio/wav',
            voice: 'pt-BR_IsabelaVoice',
        };

        textToSpeech.synthesize(synthesizeParams)
            .then(response => {
                return textToSpeech.repairWavHeaderStream(response.result);
            })
            .then(buffer => {
                fs.writeFileSync(`./public/audio/${criaAudioId}.wav`, buffer);
            })
            .catch(err => {
                console.log('error:', err);
            });
    }
}

module.exports = new TextToSpeech;