let dataDisplayed = null;

let tableContent = new Vue({
    el: '#table-container',
    data: {
        imageData: null
    }
});

let imgInfo = new Vue({
    el: '#img-info-container',
    data: {
        imgLink: null,
        imgAlt: null,
        imgName: null,
        imgUrl: null,
        author: null,
        platform: null,
        guideWiz: null,
        guideCli: null
    }
});

const imgData = [
    {
        id: "DEB091331",
        platform: "Amazon Web Services",
        zone: "US-West",
        name: "Stretch",
        version: "9",
        architecture: "amd64",
        instance: "EC2",
        date: "03/10/2019"
    },
    {
        id: "DEB091332",
        platform: "Amazon Web Services",
        zone: "Germany",
        name: "Stretch",
        version: "9",
        architecture: "amd64",
        instance: "EC2",
        date: "03/10/2019"
    },
    {
        id: "DEB091333",
        platform: "Microsoft Azure",
        zone: "US-West",
        name: "Stretch",
        version: "9",
        architecture: "amd64",
        instance: "Dsv3",
        date: "03/10/2019"
    },
    {
        id: "DEB091331",
        platform: "Microsoft Azure",
        zone: "Germany",
        name: "Stretch",
        version: "9",
        architecture: "amd64",
        instance: "Dsv3",
        date: "03/10/2019"
    },
    {
        id: "DEB080047",
        platform: "Amazon Web Services",
        zone: "US-West",
        name: "Jessie",
        version: "8",
        architecture: "amd64",
        instance: "EC2",
        date: "08/27/2015"
    },
    {
        id: "DEB080049",
        platform: "Amazon Web Services",
        zone: "US-East",
        name: "Jessie",
        version: "8",
        architecture: "amd64",
        instance: "EC2",
        date: "08/27/2015"
    },
    {
        id: "DEB080043",
        platform: "Microsoft Azure",
        zone: "US-West",
        name: "Jessie",
        version: "8",
        architecture: "amd64",
        instance: "Dsv2",
        date: "08/27/2015"
    },
    {
        id: "DEB080041",
        platform: "Microsoft Azure",
        zone: "US-East",
        name: "Jessie",
        version: "8",
        architecture: "amd64",
        instance: "Dsv2",
        date: "08/27/2015"
    },
    {
        id: "DEB080039",
        platform: "Microsoft Azure",
        zone: "Germany",
        name: "Jessie",
        version: "8",
        architecture: "amd64",
        instance: "Dsv2",
        date: "08/27/2015"
    },
    {
        id: "DEB070176",
        platform: "Microsoft Azure",
        zone: "US-West",
        name: "Wheezy",
        version: "7",
        architecture: "amd64",
        instance: "Dsv2",
        date: "06/28/2014"
    },
    {
        id: "DEB070177",
        platform: "Microsoft Azure",
        zone: "US-East",
        name: "Wheezy",
        version: "7",
        architecture: "amd64",
        instance: "Dsv2",
        date: "06/28/2014"
    },
    {
        id: "DEB070178",
        platform: "Microsoft Azure",
        zone: "Germany",
        name: "Wheezy",    
        version: "7",
        architecture: "amd64",
        instance: "Dsv2",
        date: "06/28/2014"
    },
    {
        id: "DEB070236",
        platform: "Amazon Web Services",
        zone: "US-West",
        name: "Wheezy",    
        version: "7",
        architecture: "amd64",
        instance: "EC2",
        date: "06/28/2014"
    },
    {
        id: "DEB070237",
        platform: "Amazon Web Services",
        zone: "US-East",
        name: "Wheezy",    
        version: "7",
        architecture: "amd64",
        instance: "EC2",
        date: "06/28/2014"
    },
    {
        id: "DEB070239",
        platform: "Amazon Web Services",
        zone: "Poland",
        name: "Wheezy",    
        version: "7",
        architecture: "amd64",
        instance: "EC2",
        date: "06/28/2014"
    }
];

dataDisplayed = imgData;
tableContent.imageData = dataDisplayed;

document.querySelector('#image-table').onclick = (e) => {
    const index = e.target.parentElement.rowIndex;
    if(index > 0){
        const cellData = dataDisplayed[index - 1];
        if(cellData.platform.indexOf('Amazon') > -1){
            imgInfo.imgName = cellData.id + '_AWS_' + cellData.zone + '_' + cellData.name + '_' + cellData.instance;
            imgInfo.imgAlt = 'AWS';
            imgInfo.imgUrl = 'https://aws.amazon.com/marketplace/pp/B073HW9SP3';
            imgInfo.imgLink = '../assets/logo/aws-logo.png';
            imgInfo.author = 'Amazon';
            imgInfo.platform = 'AWS';
            imgInfo.guideWiz = 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html';
            imgInfo.guideCli = 'https://docs.aws.amazon.com/cli/latest/reference/opsworks/create-instance.html';
        }
        else if(cellData.platform.indexOf('Microsoft') > -1){
            imgInfo.imgName = cellData.id + '_Azure_' + cellData.zone + '_' + cellData.name + '_' + cellData.instance;
            imgInfo.imgAlt = 'Azure';
            imgInfo.imgUrl = 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/credativ.Debian';
            imgInfo.imgLink = '../assets/logo/azure.png';
            imgInfo.author = 'Mirosoft';
            imgInfo.platform = 'Azure';
            imgInfo.guideWiz = 'https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quick-create-portal';
            imgInfo.guideCli = 'https://docs.azure.cn/zh-cn/cli/vm?view=azure-cli-latest#az-vm-start';
        }
        document.getElementById('img-info-container').style.display = 'flex';
    }
};

const updateTable = () => {
    let keywrds = document.querySelector('#search-field').value.split(' ')
    let dispData = imgData.map((e) => e);
    let maxRes = -1;

    for(let i = 0; i < keywrds.length; ++i){
        let removeEle = [];
        for(let j = 0; j < dispData.length; ++j){
            if(dispData[j].id.toUpperCase().indexOf(keywrds[i].toUpperCase()) < 0 && dispData[j].platform.toUpperCase().indexOf(keywrds[i].toUpperCase()) < 0 && dispData[j].zone.toUpperCase().indexOf(keywrds[i].toUpperCase()) < 0 && dispData[j].name.toUpperCase().indexOf(keywrds[i].toUpperCase()) < 0 && dispData[j].version.toUpperCase().indexOf(keywrds[i].toUpperCase()) < 0 && dispData[j].architecture.toUpperCase().indexOf(keywrds[i].toUpperCase()) < 0 && dispData[j].instance.toUpperCase().indexOf(keywrds[i].toUpperCase()) < 0 && dispData[j].date.indexOf(keywrds[i].toUpperCase()) < 0){
                removeEle.push(j);
            }
        }
        if(removeEle.length == dispData.length){
            continue;
        }
        for(let j = 0; j < removeEle.length; ++j){
            dispData.splice(removeEle[j] - j, 1);
        }
        maxRes = dispData.length;
    }
    dataDisplayed = dispData;
    tableContent.imageData = dataDisplayed;
};

document.querySelector('#submit-button').onclick = updateTable;

const closeInfo = () => {
    document.getElementById('img-info-container').style.display = 'none';
}