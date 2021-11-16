const links = [
  { label: 'Week 1 Notes', url: 'week1.html', }, // you can add other tags if you like
  { label: 'Week 2 Notes', url: 'week2.html', },
  { label: 'Week 3 Notes', url: 'week3.html', },
  { label: 'Week 4 Notes', url: 'week4.html', },
  { label: 'Week 5 Notes', url: 'week5.html', },
  { label: 'Week 6 Todo App', url: 'week6.html', },
  { label: 'Week 7 Notes', url: 'week7.html', },
  { label: 'Week 8 Notes', url: 'week8.html', },
  { label: 'Week 9 Notes' + '/' + 'Challenge Proposal', url: 'week9.html',url: 'proposal.html', },
  { label: 'Challenge Proposal', url: 'proposal.html', },
  { label: 'Week 10 Notes', url: 'week10.html', },
];

const ol = document.getElementById('assignments');      // whatever your OL tag ID is
links.forEach(link => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.setAttribute('href', link.url);
  a.innerText = link.label;
  // add other tags of interest if you like (date submitted, score)
  li.appendChild(a);
  ol.appendChild(li);
});