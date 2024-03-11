{/*
* Promise State
*Как вы знаете, обещание находится в одном из этих состояний: ожидание, исполнение, отказ.

Реализуйте async-функцию getState, которая определяет состояние обещания.
*
* const p = Promise.resolve();
const state = await getState(p); // === "fulfilled"

const p = Promise.reject();
const state = await getState(p); // === "rejected"

const p = new Promise(() => {});
const state = await getState(p); // === "pending"
* */}
async function getState(promise) {
    try {
        await Promise.race([promise, Promise.resolve().then(() => { throw new Error('timeout'); })]);
        return "fulfilled";
    } catch (error) {
        if (error && error.message === 'timeout') {
            return "pending";
        } else {
            return "rejected";
        }
    }
}

{/*
function getState(promise) {
  const t = {};
  return Promise.race([promise, t])
    .then(v => (v === t)? "pending" : "fulfilled")
    .catch(err => "rejected");
}

*/}
