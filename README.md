# FullStory React Native Challenge
Welcome! This repo should be used to complete the React Native portion of take home challenge for the [Principal Support Engineer, Mobile Apps](https://www.fullstory.com/careers/jobs/6423283002/?gh_jid=6423283002) role.

## Getting started

1. Clone or make a fork of this repo to work locally.

#### System Requirements
- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode)
- [CocoaPods](https://cocoapods.org/)

#### Environment
This repo was built with node v18.4.0, Ruby v2.7.5, npm v8.15.0, yarn 1.22.19.

‼ Please use v1.32.0 of the FullStory SDK.

## Instructions

1. Fork this repository and integrate FullStory's SDK.
2. Utilize yarn or npm to build the app's dependencies.
3. [Integrate FullStory](https://help.fullstory.com/hc/en-us/articles/360052419133-Getting-Started-with-FullStory-React-Native-Capture) into the application.

    ⚠️ Use org id `o-1EJJEX-na1`

4. Implement a [Custom Event](https://developer.fullstory.com/custom-events) that fires when the app is launched. This event should meet the following specifications:

    - event name: `RN Challenge Session Captured`
    - include an event property called `name` and use your name as the value.

5. Utilize the SDK's onReady listener in both iOS and Android to print the session URL in runtime logs.
6. Provide a link to your fork or branch along with a session URL for each platform.

## Some notes
- Don't worry about the app's functionality. It should be minimally interactive, but clicking on the cat doesn't *actually* make it play a sound right now.
- Try not to spend more than 2 days on this exercise.
- Reference our [knowledge base](https://help.fullstory.com/hc/en-us/categories/4412779509911-FullStory-for-Mobile-Apps) and [developer site](https://developer.fullstory.com/) for guidance.
