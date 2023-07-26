import passport from 'passport';
import Strategy from 'passport-discord';

passport.serializeUser((user, done)=>{
    done(null,user)
})

passport.deserializeUser((obj, done)=>{
    done(null,obj)
})

passport.use(new Strategy({
    clientID: "1133486179443036190",
    clientSecret:"7a34f7fa2b7f353309d77c2b2097e049fcb32a015f32af830f112ec9497f3283",
    callbackURL:"http://localhost:3000/login",
    scope: [ "identify" ],
}, (accestoken, refreshtoken, profile, cb)=>{
    process.nextTick(()=>{
        return cb (null,profile)
    })
}))

export {passport}