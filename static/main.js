let imageData = [
    {
        "id": "deb190123",
        "name": "Debian-Sid-AWS",
        "platform": "Amazon Web services",
        "version": "Unstable",
        "date": "02/13/2019"
    },
    {
        "id": "deb190124",
        "name": "Debian-Stable-AWS",
        "platform": "Amazon Web services",
        "version": "Stable",
        "date": "02/13/2019"
    },
    {
        "id": "deb190126",
        "name": "Debian-Sid-AWS",
        "platform": "Amazon Web services",
        "version": "Unstable",
        "date": "02/14/2019"
    },
    {
        "id": "deb190125",
        "name": "Debian-Stable-AWS",
        "platform": "Amazon Web services",
        "version": "Stable",
        "date": "02/14/2019"
    },
    {
        "id": "deb190127",
        "name": "Debian-Sid-GCP",
        "platform": "Google Cloud Platform",
        "version": "Unstable",
        "date": "02/13/2019"
    },
    {
        "id": "deb190128",
        "name": "Debian-Stable-GCP",
        "platform": "Google Cloud Platform",
        "version": "Stable",
        "date": "02/14/2019"
    },
    {
        "id": "deb190129",
        "name": "Debian-Sid-GCP",
        "platform": "Google Cloud Platform",
        "version": "Unstable",
        "date": "02/14/2019"
    },
    {
        "id": "deb190130",
        "name": "Debian-Stable-GCP",
        "platform": "Google Cloud Platform",
        "version": "Stable",
        "date": "02/14/2019"
    },
    {
        "id": "deb190123",
        "name": "Debian-Sid-IBM",
        "platform": "IBM Web services",
        "version": "Unstable",
        "date": "02/13/2019"
    },
    {
        "id": "deb190123",
        "name": "Debian-Stable-IBM",
        "platform": "IBM Web services",
        "version": "Stable",
        "date": "02/13/2019"
    },
    {
        "id": "deb190123",
        "name": "Debian-Sid-IBM",
        "platform": "IBM Web services",
        "version": "Unstable",
        "date": "02/14/2019"
    },
    {
        "id": "deb190123",
        "name": "Debian-Stable-IBM",
        "platform": "IBM Web services",
        "version": "Stable",
        "date": "02/14/2019"
    },
    {
        "id": "deb190123",
        "name": "Debian-Sid-Azure",
        "platform": "Azure Web services",
        "version": "Unstable",
        "date": "02/13/2019"
    },
    {
        "id": "deb190123",
        "name": "Debian-Stable-Azure",
        "platform": "Azure Web services",
        "version": "Stable",
        "date": "02/13/2019"
    },
    {
        "id": "deb190123",
        "name": "Debian-Sid-Azure",
        "platform": "Azure Web services",
        "version": "Unstable",
        "date": "02/14/2019"
    },
    {
        "id": "deb190123",
        "name": "Debian-Stable-Azure",
        "platform": "Azure Web services",
        "version": "Stable",
        "date": "02/14/2019"
    }
];

imageData.sort(function(a, b){
    return (new Date(b.date) - new Date(a.date));
});

const insertTableData = (data, n) => {
    const tableEle = document.getElementById('image-table');
    const numRowEle = (data.length > n)? n: data.length;

    for(let i = tableEle.rows.length - 1; i > numRowEle; --i){
        tableEle.deleteRow(i);
    }

    for(let i = tableEle.rows.length; i <= numRowEle; ++i){
        tableEle.insertRow(i);
    }

    for(let i = 1; i <= numRowEle; ++i){
        const rowEle = tableEle.rows[i];
        for(let j = rowEle.cells.length; j < 6; ++j){
            rowEle.insertCell(j);
        }
        rowEle.cells[0].textContent = i;
        rowEle.cells[1].textContent = data[i - 1].id.toUpperCase();
        rowEle.cells[2].textContent = data[i - 1].name;
        rowEle.cells[3].textContent = data[i - 1].platform;
        rowEle.cells[4].textContent = data[i - 1].version;
        rowEle.cells[5].textContent = data[i - 1].date;

        rowEle.cells[0].style.color = "#D50032";
        
        if(data[i - 1].version == "Stable"){
            rowEle.cells[4].style.color = "green";
        }
        else{
            rowEle.cells[4].style.color = "#D50032";
        }
        /*
        if(data[i - 1].platform == "Amazon Web services"){
            rowEle.cells[3].style.color = "#ff9900";
        }
        else if(data[i - 1].platform == "Azure Web services"){
            rowEle.cells[3].style.color = "blue";
        }
        else if(data[i - 1].platform == "Google Cloud Platform"){
            rowEle.cells[3].style.color = "green";
        }
        */
    }
}

insertTableData(imageData, 16);

document.addEventListener('keyup', (e) => {
    let searchTerm = document.getElementById('search-query-field').value. split(' ');
    let data = []
    let copyData = imageData.map((a) => a);
    for(let i = 0; i < searchTerm.length; ++i){
        let k = copyData.length;
        let del = []
        for(let j = 0; j < k; ++j){
            if(copyData[j].id.toUpperCase().indexOf(searchTerm[i].toUpperCase()) > -1 || copyData[j].name.toUpperCase().indexOf(searchTerm[i].toUpperCase()) > -1 || copyData[j].platform.toUpperCase().indexOf(searchTerm[i].toUpperCase()) > -1 || copyData[j].version.toUpperCase().indexOf(searchTerm[i].toUpperCase()) > -1 || copyData[j].date.indexOf(searchTerm[i]) > -1){
                data.push(copyData[j]);
                del.push(j);
            }
        }
        for(let j = 0; j < del.length; ++j){
            copyData.splice(del[j] - j, 1);
        }
    }
    data.sort(function(a, b){
        return (new Date(b.date) - new Date(a.date));
    });
    insertTableData(data, 16);
})

document.querySelector('#close-button').onclick = () => {
    document.getElementById('instruction').style.display = 'none';
};

document.querySelector('#image-table').onclick = (e) => {
    if(e.target.parentElement.rowIndex > 0){
        document.getElementById('instruction').style.display = 'block';
    }
};