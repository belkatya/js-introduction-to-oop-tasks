// BEGIN
export const getMutualFriends = (user1, user2) => {
  const friends1Ids = user1.getFriends().map(friend => friend.id);
  const friends2Ids = user2.getFriends().map(friend => friend.id);

  const mutualFriendIds = friends1Ids.filter(friendId => friends2Ids.includes(friendId));
  const friends1Set = new Set(user1.getFriends());

  return user1.getFriends().filter(friend => mutualFriendIds.includes(friend.id));
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});