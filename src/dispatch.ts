import * as cluster from 'cluster';
import * as path from 'path';
import * as os from 'os';

let now = () => new Date().toISOString();

cluster.setupMaster({
  exec: path.join(__dirname, 'scripts/worker.js'),
});

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork());
  cluster.on('listening', (worker, address) => {
    console.error(
      `[${now()}] master#${process.pid} worker#${
        worker.process.pid
      } is now connected to ${address.address}:${address.port}.`,
    );
  });
  cluster.on('disconnect', worker => {
    console.error(
      `[${now()}] master#${process.pid} worker#${
        worker.process.pid
      } has disconnected.`,
    );
  });
  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `[${now()}] master#${process.pid} worker#${
        worker.process.pid
      } died (${signal || code}). restarting...`,
    );
    cluster.fork();
  });
}
