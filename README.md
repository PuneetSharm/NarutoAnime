## Things I learned

- Humesha think component ka total kya kaam h, uske hisaab se component banao tabhi toh reusable bana paoge. Example mai Pagination - pagination ka component ka kaam h niche saare numbers dikhana iska mtlb h, ki jo pages h wo bhi ussi ke andar ka jo div h wahi map kroge taaki saare page number dikhe (mere case mai)
- Before writing use pen and paper think of kya krna h
- Humesha problem ka solution sochte ho toh socho data kahan se aaega
- useEffect mai dependency array mai selectedPage jo diya wo isliye diya gya kyuki agar selectedPage change ho toh re-render ho.
- pagination ke liye aapke paass - total items hone chahiye, ek page mai kitne items chahiye wo aap likh skte ho, aur uske baad konsa page select hoga, uske baad agar pagesize dynamically change kr rhe ho toh wo bhi hona chahiye as state. Toh state mai (total,selectedPage,pageSize, page - isme total number of pages hote h)
- In pagination you need to compute - numberOfPages = (totalItems/pageSize) and use useEffect to re-render the values when they change by putting them in dependencies array
- to make tabs and set a tab active - you will need index and that index should be saved in a state Variable so the changes are known to react
- always give bg to the container to see the container. To adjust div as per it's content use inline-flex if you want item to flex
- Think about conditional rendering - In this case the conditional rendering depends on the indexValue
- const countries = [
  { name: "India", code: "IN", cities: ["Delhi", "Mumbai", "Chennai", "Bangalore"] },
  { name: "United Arab Emirates", code: "UAE", cities: ["Dubai", "Abu Dhabi"] },
  { name: "The United States of America", code: "USA", cities: ["New York", "Texas", "Miami", "Florida"] }
  ];
  In this case, if you use map or filter, and you need to access the cities array (which is a key inside each object), you can do so using variableName[index]["cities"] or variableName[index].cities to access the cities of the first object.
