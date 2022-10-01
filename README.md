# RawDog Games

This is a Next.js gaming app project. It's fairly simple. It only shows 10 items on the homepage but it has functional authentication, data caching on the development environment and in production using **HTTP Cache-Headers** 

The reason why this project is very lightweight is because I focused less on what the end product would look like, and more on the code implementation to better show my technical depth when it comes to engineering frontend apps. There's a ton of things I could add but I dont want to over-engineer it.

<hr />

The two main points I wanted to try out are HTTP Cache-Headers, and proper client side rendering using Next.js' built-in API routes. Performance and accessibility are things I'm working on as a developer and I'm currently implementing what I learned recently into this small project. Reducing server costs, API usage bills, and better user experience are thing's this technique could help.

I might add in a couple test cases. It has a lot of high re-usable modules and I tried to keep components as decoupled as possible, off to a great start and will continue to refactor. 

The Lighthouse scores are also really good averaging `[99, 98, 99, 100]` on my local dev environment with the caching and Next.js' Image optimizations.

## Try it out

You can bring the repo down to your local machine, run `npm install`, and open up `localhost:3000`. 

Click on 
```bash
inspect -> network -> 'games'
```

If you reload a few times, you should see `200 (local disk cache)` which means it's serving from the cache. In production, it serves from a ***public*** cache which is the default for Next.js/Vercel
