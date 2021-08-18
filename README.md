# React Production Boilerplate

I create this to be a starting code for my front end projects from now on. The idea for this boilerplate is that I don't want to use create-react-app since it adds a lot of things I don't needs. Using my own boilerplate give me a lot of freedom in customizations.

Now, while I create this boilerplate with production level app in mind, it by no means is perfect. You might want to use this and add more customizations according to your needs.

## Features
- tree shaking
- production and development webpack config (I will try to separate this in their own files in the future)
- all standard loaders installed and ready to use
- integration of eslint and prettier
- airbnb code style
- best one, fast refresh. No need to wait for reload, you can see the UI change instantly

## Todo
- separating webpack config file (done)
    - implement webpack merge to reduce duplicate config
- adding webpack bundle analyzer