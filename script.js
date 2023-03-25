const input = document.querySelector('.inputBx input');
const searchResult = document.querySelector('.searchResult');
const searchResultBx = document.querySelector('.searchResultBx');

const data = [
    {
        keyword: 'newyork',
        link: 'www.nytimes.com'
    },
    {
        keyword: 'cake',
        link: 'www.cheesecakes.com'
    },
    {
        keyword: 'cooking',
        link: 'www.chef.com'
    },
    {
        keyword: 'milk',
        link: 'www.magcow.com'
    },
    {
        keyword: 'moon',
        link: 'www.days.com'
    },
    {
        keyword: 'monkey',
        link: 'www.monkeyknows.com'
    },
    {
        keyword: 'mars',
        link: 'www.planets.com'
    }
];

input.oninput = (e) => {
    const userInput = e.target.value;
    searchResult.innerHTML = "";
    searchResultBx.style.display = 'none';
    if(userInput.length > 0){
        let results = getResults(userInput);
    }
}

const getResults = (input) => {
    let html = ``; 
    data.forEach((item, ind) => {
        if(item.keyword.includes(input)){
            searchResultBx.style.display = 'block';
            console.log("matched : " + item.keyword)
            html += `
            <div class="result">
                <div>
                    <h3>${item.keyword}</h3>
                    <span>${item.link}</span>
                </div>                     
                <div>
                    <box-icon class="arrow" name='right-arrow-alt'></box-icon>
                </div>   
            </div>  
            `;
        }
    }); 
    searchResult.innerHTML = html;

}

