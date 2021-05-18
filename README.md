<p align="center">
  <p align="center">:clapper: :clapper: :clapper:</p>
  <h3 align="center">tv-bland</h3>
  <p align="center">source of tv-bland, lol<p>
</p>

![Preview](https://github.com/dominickolbe/tv-bland/blob/master/screenshot.png?raw=true "tv-bland")

## Preview

[see live version here](https://tv-bland.vercel.app)

visit the latest version live and in color

```http
https://tv-bland.vercel.app
```

Example tv show

```http
https://tv-bland.vercel.app/tvshows/66
```

## Getting Started

### Prerequisites

I build this entire project with the following setup:

- macOS Big Sur 11.4 Beta
- node v14.17.0
- npm v6.14.13
- yarn v1.22.10

### Development

1. create your `.env` file based on the `.env.example`

2. install all necessary dependencies

```bash
yarn install
```

3. start dev server

```bash
yarn start
```

### Production

1. install all necessary dependencies

```bash
yarn install
```

2. build application

```bash
yarn build
```

### Tests

run prettier check

```bash
yarn prettier-check
```

run all tests

```bash
yarn test
```

---

## Docker

### Build docker container

```
docker build -t tv-bland .
```

### Run docker container

```
docker run -p 3000:3000 tv-bland
```

---

## License

MIT License

Copyright (c) 2021 [Dominic Kolbe](https://dominickolbe.dk)
