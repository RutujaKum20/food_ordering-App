# food App

/ component

- -header
-        -logo
-       -nav Items
- -body
-       -search
-       -resto container
-            -resto cards
-               -img
-               -name of res
-              -star ratings
- -footer
-       -copyrights
-       -links
-       -address
-       -contactss
  /

#two types of export import

- default export /import
  export default compnent
  import component from "path"

- named export import
  export const component
  import {comenent} from "path"

# 2 types of web routing

- client side routing
- server side routing

# redux toolkit

- install @reduxjs/toolkit and react-redux
- build our store
- connect our store to app
- slice (cart slice)
- dispatch(action)
- selector

# Types of testing

- manual testing
- integration testing
- end to end testing (e2e)

# setting up testing in our app

- install react testing library
- install jest
- install babel dependencies
- configure babel
- configure parcel config file to disable default babel transpilation
- jest configuration
  npx jest --init
- install jsDom library
- install @babel/preset-react - to make jsx work in test cases
- include @babel/preset-react inside my babel config
- install

  npm i -D @testing-library/jest-dom
