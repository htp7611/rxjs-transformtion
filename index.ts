import { of, interval, fromEvent } from 'rxjs'; 
import { map, take, mergeAll, mergeMap, switchMap, concatMap } from 'rxjs/operators';


const ob = interval(1000).pipe(take(10));

const observer = {
  next(res) {
    console.log(res);
  },
  error(err) {
    console.log(err);
  },
  complete() {
    console.log('complete');
  }
}

const click$ = fromEvent(document, 'click').pipe(take(5));

// click$.subscribe(next => {
//   console.log('clicked');
//   ob.subscribe(observer)
// })

// click$.pipe(
//   map(() => {
//     console.log('clicked');
//     return ob
//   }),
//   mergeAll()
// ).subscribe(observer)

// click$.pipe(
//   mergeMap(() => {
//     console.log('clicked');
//     return ob
//   })
// ).subscribe(observer)

// click$.pipe(
//   mergeMap(() => {
//     console.log('clicked');
//     return ob
//   }, 2)
// ).subscribe(observer)

// click$.pipe(
//   switchMap(() => {
//     console.log('clicked');
//     return ob
//   })
// ).subscribe(observer)

click$.pipe(
  concatMap(() => {
    console.log('clicked');
    return ob
  })
).subscribe(observer)