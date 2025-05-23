import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: "nterv-f91eb",
        clientEmail:
          "firebase-adminsdk-fbsvc@nterv-f91eb.iam.gserviceaccount.com",

        privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUFBkggenz9Ofr
Rqp+9YRY1BzDbnobizuHtb9nuO6pIid0ifXaBsNZXnQ4ymbdxPPM+5NriKVcguth
zVaJUJmGiXhkLD1Sis93M021ycXh4LxlTYTD4IuoJiufomsLO421SP/NRi2rjUdm
bxrxvVXp0g7sma7xjhHUuQM12V4MzcLQBIwqKFA2RwfIVOHkwUwsGN0y2vWfNbEX
SuDO/0WpqZVsP9kMoGn0R2gObB1ZCtfL37BTJWqRGW4ekuQHzf4cuo7gD6zpFBPn
1m8VrSngVQmlAXxNw5+3S89meIIVlDIqJBc1znqVhRsqIXq11nWGyXCoO8/6tHLW
wHHz2683AgMBAAECggEAIebLPtC7AbN5oLjy0klptvrD/6hZFAQa0mPcTWFY+BKB
9MraUS2u6/SsZtOmw/a9nlvs7KNdrmnYj2bQBDKtMr4mT6UUHG4czLTtIY03+Raq
0cAljrEGF4LFNcc0jgl0FVxY/+B4YSm8FdosQs59vbCa5XmKZ191kZK4ZP2dX4r4
zG5Yfc0MLDfjmByW9L7b8mNB/kzJZwi8PmUJfKaK9IVd0HtKWDA+jjQsJAl+oFBv
dLWE1G4ic9lL2waO0ZWUc9aqcE0i3Uyv4f7hTyCpTPWYS9ay3liUs8TeCkH0D0AO
Qhh06XDS8Geh8ucbCznuJCDSCoq7aryyOQ5TevD6QQKBgQD7xBorB5s3IR2/yOnW
uF6hjFhgVSNi9K+sXbYzJuVIeiKyMIdZiDcTCEGUuWv/QzvL9ZHEaUp+QtJR08Re
EY2nYRCnsg+Lrz5ARgCV1FJ4gS0IUoaLrwKlrSCqicG1TXK4OSVw7cB+f7MbVgmH
YTn/rE2F4UMPBWieyzdob2v31wKBgQDXpSJS1AI8n1hyhkjEMd8q3c5oMA46+DXe
oEACqTNOZKav31mVrVoU2BkGGMp0wZ3zpFVUKr//V4M45AsJ8hI4Dj0ATPzVw9QO
AFXUOKXKZTPiCqebpZW9dEnXHrUyGMI6gojX33E598yEWz93Ahdhg1qwJ4xlscbV
BTm8v8OXoQKBgQD3mBRwCsvvfIboLCsjei++SepD2paxY5c8OPDM/0xvaYWjnawO
NbKL6gusumlmIPW2kGtpMG8NGqQByvQL2tFnMUMS2D8HjTD4Pp+muabdUZQ64gXl
axh8XHWKoW054s+WMsUKeRZckTNQB93ZIJnMQeP/bNfo9tW7jHiSITmaAwKBgCBE
FySpkEQd25AXQ6AHjkrNsWqpdhegt/69n5ZGVuTt7nr2QmNA8u+XffcJkpFxvv6L
ojDbzKqaH4pNpNEyJUO57aqz2kjp6jrGFhGRAE2OYvr5eSay2frlAX9smtQKHFXA
3lTenAR+bV2IgbB+4Zy3mMQuxrUYqpWJGKCDWPLBAoGBAO6ddmjBZUTPec145zOD
dLLcxJoGJP52TfJETF+4k8qK7PfiomnrCs/pWD9dRUVqFSvS9GyKy2Txee67npFF
c9KcV1y2OTyJu7ij69iBPt8GAmxnxWlSgbkG3dEU3wk+N1vzPsnKiX2tfAErNkK5
tuthM0dtSFcaKrZeKva+KCaX
-----END PRIVATE KEY-----`,
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
