# NextCode - Online Judge


## QuickStart

Visit hosted instance at [https://nextcode.soufrabi.com](https://nextcode.soufrabi.com)

## Development

Clone the repo
```sh
git clone https://github.com/soufrabi/nextcode.git
cd nextcode
```

Install dependencies
```sh
npm i
```

Run the development server:
```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy using Docker

Next.js Dockerization Example : <https://github.com/vercel/next.js/tree/canary/examples/with-docker/>

Docker Image hosted at : <https://hub.docker.com/r/soufrabidev/nextcode/>

```sh
docker pull docker.io/soufrabidev/nextcode:<TAG_NAME>
docker run -d -p <YOUR_PORT>:3000 soufrabidev/nextcode:<TAG_NAME>
```

## Environment Variables

```
RCEE_SERVER_ADDRESS="http://<IP_ADDRESS>:<PORT>"
```

