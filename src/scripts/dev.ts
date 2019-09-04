import config from '../config';
import app from '../app';

const start = () => {
  let port = config.serve.port;
  let url = `http://localhost:${port}`;
  console.log('----------------------------------------');
  app.listen(port, () => {
    console.log(`app is running as ${url}`);
  });
};

start();
