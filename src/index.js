import {SynchronousPromise} from 'synchronous-promise';

export default function toutSuite(block) {
  let realPromise = global.Promise;

  global.Promise = SynchronousPromise;
  try {
    return block();
  } finally {
    global.Promise = realPromise;
  }
}