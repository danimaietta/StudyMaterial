/*** Example 1 ***/

// es5
var add = function (a) {
  return function (b) {
    return a + b
  }
}

var addFive = add(5)

console.log(addFive) // function (b) { return a + b; }
console.log(addFive(2)) // 7

// es6
var add = a => b => a + b

var addFive = add(5)

console.log(addFive(2)) // 7

// another way to call it

var add = a => b => a + b

console.log(add(5)(2))

/*** Example 2 ***/

const [cardInfo, setCardInfo] = useState({
  owner,
  cardNumber,
  cvv,
  month: 'January',
  year: '2021',
  type: 'Visa'
})

// Without handleChange
;<input onChange={e => setCardInfo({ ...cardInfo, owner: e.target.value })}></input>
;<input onChange={e => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}></input>
;<input onChange={e => setCardInfo({ ...cardInfo, cvv: e.target.value })}></input>
;<input onChange={e => setCardInfo({ ...cardInfo, type: e.target.value })}></input>

// With handleChange
const handleChange = attr => e => setCardInfo({ ...cardInfo, [attr]: e.target.value })

;<input onChange={handleChange('owner')}></input>
;<input onChange={handleChange('cardNumber')}></input>
;<input onChange={handleChange('cvv')}></input>
;<input onChange={handleChange('type')}></input>
