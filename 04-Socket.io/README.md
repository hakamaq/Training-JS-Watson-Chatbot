Welcome to this Socket.IO tutorial, which will teach you how to use the library.

## Why it's useful[](https://replit.com/talk/learn/SocketIO-Tutorial-What-its-for-and-how-to-use/143781#why-it's-useful)

Socket.IO is a JavaScript library for communication between web clients and servers in real time. It can be used to make multiplayer games. My [chat project](https://replit.com/talk/share/Chat-Updated/140472), [connect 4 game](https://replit.com/talk/share/Connect-4-The-online-version-play-on-one-device-or-on-different-devices/142068), [video conferencing app](https://replit.com/talk/share/EasyMeet-A-video-conferencing-app-I-made/142702), and [multiplayer pong game](https://replit.com/talk/share/MultiPong-A-multiplayer-pong-game-and-its-my-birthday-today-D/143432) all used Socket.IO.

## Content[](https://replit.com/talk/learn/SocketIO-Tutorial-What-its-for-and-how-to-use/143781#content)

-   Sending a message in client and server
-   Recieving a message in client and server
-   Socket IDs
-   Rooms
-   Different ways to send messages

We'll be using Express for the server. I'll be explaining a lot of the code with comments.

### Sending/recieving a message in client and server[](https://replit.com/talk/learn/SocketIO-Tutorial-What-its-for-and-how-to-use/143781#sendingrecieving-a-message-in-client-and-server)

Let's start by creating a Node.js repl. Then insert the following code:

Once you run the code, Replit will install packages. Then you'll see a page that says `Cannot GET /`, because we haven't added any pages yet.

Remember, you use `socket.on` to recieve a message, and `socket.emit` to send a message.

Next, create a new folder called `public`, and in the folder, create a file called `index.html` and a file called `script.js`.

In `public/index.html` add this:

And in `public/script.js` add this code:

Now, to test it, open the website. It should show a popup saying `someone joined`. Then open the website again in another tab to make sure that the `socket.on` works in the first tab. In both tabs, it should say `someone joined`. When you close one of the tabs, the other tab should say `someone left`.

Yay! We've made a really simple multiplayer website!

But what if we wanted to pass in values, and the client that recieved the message also recieves the value? Well, lucky for us, it's super easy in Socket.IO. If we wanted to use `socket.emit` or `io.emit` to pass in a variable, you could just pass in more arguments:

or

And to recieve the message, you would do:

You can add as many arguments as you would like:

### Socket IDs[](https://replit.com/talk/learn/SocketIO-Tutorial-What-its-for-and-how-to-use/143781#socket-ids)

A socket ID is a identifier of 20 random characters, for example `7CFGPYjHt_Qk7JMBAAAL`. Socket IDs are useful if you wanted to keep track of users online, or if you wanted to send a message to just one user.

To get the ID, you would do something like this:

If you used `socket.id` in the client, it would return their Socket ID. If you used `socket.id` in the server, it would return the Socket ID of the client that sent a message.

To send a message from the server to just one client, you would do this:

### Rooms[](https://replit.com/talk/learn/SocketIO-Tutorial-What-its-for-and-how-to-use/143781#rooms)

Socket.IO rooms make it easy for you implement rooms in a website. All of my projects mentioned at the start of this tutorial had rooms.

To join a room, you would use this code in the server:

And to leave a room:

To send a message to all clients in a room you would do this:

Let's try making our repl allow people to enter their names and join rooms.

In `index.js`:

In `public/index.html`, it's the same as before. And in  
`public/script.js`:

### Different ways to send messages[](https://replit.com/talk/learn/SocketIO-Tutorial-What-its-for-and-how-to-use/143781#different-ways-to-send-messages)

Here are the ways you can send a message from the server to the client:

This tutorial has come to an end, and I hope you learned something!

## Bye![](https://replit.com/talk/learn/SocketIO-Tutorial-What-its-for-and-how-to-use/143781#bye!)