# GraphQL

its a querying language used to perform CRUD operation to more than one data store

there are two types of operations done by GraphQL:
- querying
- mutations

graphql has a type system that is used to define the schema of an API named schema definition language

heres a defined types example

type Person{
    id:Id!
    name: String!,
    age:Int!
    posts:[Post!]!
}

type Post{
    id:Id!
    title:String!
    author:Person
}

the above type also create a one to many relationship between the person and blogs respectively

heres is an example of a query

{
    allPersons{ <- this is referred to the root field
        name  <- this is referred to the payload
    }
}

there are three types of mutatations:

- create
- update
- delete

when dealing with mutations ,the quaery must start the keyword Mutation:

Mutation {
    createPerson(name:"Mario",age:23){
        id
    }
}

the above mutation will also return the id for the person created

GraphQl can update data in the client side using the concept called subscription 

subscription{
    allPersons{
        name  
        age
    }
}

 the 3 different kinds of architectures are:

 - GraphQL server with a connected database
 - GraphQL layer that integrates existing systems
 - Hybrid approach with connected database and integration of existing system

 On the server side GraphQl implements a resolver function:

 type Query{
    User(id:'sdfsdfssdaf'){
        name
        friends(first:5){
            name
            age
        }
    }
}

for the above client query the resolver function will be:

User(Id:String): User
name(user:User!):String
age(user:User!):Int
Friends(first:Int,user:User!):[User]