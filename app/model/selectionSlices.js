import { Schema } from "mongoose";
export const Name = new Schema ({
    title:String,
    first:String,
    last:String
})
export const Street = new Schema ({
    number: Number,
    name: String
})
export const Coords = new Schema ({
    latitude: Number,
    longitude: Number
})
export const TimeZone = new Schema ({
    offset: String,
    description: String
})
export const Location = new Schema ({
    street: Street,
    city:String,
    state:String,
    country:String,
    postcode:String,
    coordinates:Coords,
    timezone: TimeZone
})
export const Login = new Schema ({
    uuid:String,
    username:String,
    password:String,
    salt:String,
    md5:String,
    sha1:String,
    sha256:String,
})
export const DateObj = new Schema ({
    date: {
        type: [Date, String]
    },
    age: Number
})
export const Picture = new Schema ({
    large: String,
    medium: String,
    thumbnail: String,
})
export const ID = new Schema ({
    name: String,
    value: Number
})