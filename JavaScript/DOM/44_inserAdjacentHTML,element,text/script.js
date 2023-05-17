//let first = document.getElementsByIdName("first")
//jaisa naam waisa kaam, element ke aage peeche hi end honge
first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>')
first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>')
first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>')
first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>')

/* element.remove(): removes the whole element */
//first.remove()