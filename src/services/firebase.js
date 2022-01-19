import { firebase, FieldValue } from '../lib/firebase'

export async function doesUsernameExist(username) {
    const result = await firebase
      .firestore()
      .collection('users')
      .where('username', '==', username.toLowerCase())
      .get();
  
    return result.docs.length > 0;
  }

  export async function getUserByUserName(username) {
    const result = await firebase
      .firestore()
      .collection('users')
      .where('username', '==', username.toLowerCase())
      .get();
  
    return result.docs.map((item) =>({
      ...item.data(),
      docId: item.id
    }))

  }

  export async function getUserByUserId(userId) {
    const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
    const user = result.docs.map((item) => ({
      ...item.data(),
      docId: item.id
    }));
  
    return user;
  }

export async function getSuggestedProfiles(userId, following){
  const result = await firebase.firestore().collection('users').limit(10).get()
  return result.docs
    .map((user) => ( {...user.data(), docId:user.id}))
    .filter((profile) => profile.userId !== userId && !following.includes(profile.userId))
    //don't want to include own profile, or profiles already following
}



export async function updateLoggedInUserFollowing(loggedInUserDocId, profileId, isFollowingProfile){
  return firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
      ? FieldValue.arrayRemove(profileId)
      : FieldValue.arrayUnion(profileId)
    })
}

export async function updateFollowedUserFollowers( profileDocId, loggedInUserDocId, isFollowingProfile){
  return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
      ? FieldValue.arrayRemove(loggedInUserDocId)
      : FieldValue.arrayUnion(loggedInUserDocId)
    })
}

export async function getPhotos(userId,following){
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', following)
    .get()

    const userFollowedPhotos = result.docs.map((photo) => ({
      ...photo.data(),
      docId: photo.id
    }))

    const photosWithUserDetails = await Promise.all(
      userFollowedPhotos.map(async (photo) => {
        console.log(`photo-firebaseJs: ${photo.imageSrc}`)
        let userLikedPhoto = false
        if(photo.likes.includes(userId)){
          userLikedPhoto = true
        }
        const user = await getUserByUserId(photo.userId)
        const { username } = user[0]
        return { username, ...photo, userLikedPhoto}
      })
    )
    return photosWithUserDetails
}

// export async function getUserIdByUsername(username){
//   const result = await firebase

// }


export async function getUserPhotosByUsername(username){
  const [user] = await getUserByUserName(username)
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', '==', user.userId)
    .get()
  
  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))
}