import profileReducer, {
  ProfileReducer,
  ProfileType,
  addPostAC,
  changeCurrentUserIdAC,
  onChangeNewPostTextValueAC,
  setProfileStatusAC,
  setUserProfileAC,
} from "./profile-reducer";

let startState: ProfileReducer;

beforeEach(() => {
  startState = {
    newPostText: "",
    posts: [
      { id: 1, message: "Hi, how are you?", likes: 2 },
      { id: 2, message: "It's mt first post", likes: 4 },
    ],
    profile: null,
    currentUserId: 2,
    profileStatus: "",
  };
});

test("reducer should add post", () => {
  const postMessage = "testMessage";

  const endState = profileReducer(startState, addPostAC(postMessage));

  expect(endState.posts.length).toBe(3);
});

test("reducer should should change newPostText", () => {
  const newPostMessage = "testMessage";

  const endState = profileReducer(
    startState,
    onChangeNewPostTextValueAC(newPostMessage)
  );

  expect(endState.newPostText).toBe(newPostMessage);
});

test("reducer should should set userProfile", () => {
  const testUserProfile = {} as ProfileType;

  const endState = profileReducer(
    startState,
    setUserProfileAC(testUserProfile)
  );
  expect(endState.profile).toBe(testUserProfile);
});

test("reducer should should change currentUserId", () => {
  const testId = 1;

  const endState = profileReducer(startState, changeCurrentUserIdAC(testId));

  expect(endState.currentUserId).toBe(testId);
});

test("reducer should should set profileStatus", () => {
  const testProfileStatus = "test status";

  const endState = profileReducer(
    startState,
    setProfileStatusAC(testProfileStatus)
  );

  expect(endState.profileStatus).toBe(testProfileStatus);
});
