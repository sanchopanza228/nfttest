const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"coins","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"attributeSeed","type":"uint256"}],"name":"CreateGoblin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getGoblinsCoins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"person","type":"address"}],"name":"goldBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalGoldCoins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let contract;
let accounts;
let result;
let started = false;
let connected = false;
let amount = 1;

window.onload = async function() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    console.log("enabled")
    setUpBlockchain();
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    setUpBlockchain();
    console.log("provider")
  } else {
    //Change to mainnet
    window.web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/d4c43df259ad4544816bab61a3a421b0'));
    setUpBlockchain();
    console.log("infura")
  }
};

async function setUpBlockchain() {
    //Display account
    accounts = await web3.eth.getAccounts();
    connected = accounts.length > 0;
    const lcontract = new web3.eth.Contract(abi, "0x24375f93b60ddf9b2b51b3a3a953f15e977f7cf8");
    let totalSupply;
    try {
        totalSupply = await lcontract.methods.totalSupply().call();
        let goldBalance = await lcontract.methods.goldBalance(accounts[0]).call();
        contract = lcontract;
        if(connected) {
          $("#connect-button>b").text(accounts[0].slice(0,10)+"...");
          $("#balance-text").text(goldBalance);
        }
        $("#amount-text").text("There are " + (started ? (8500-totalSupply) : 8500) +" Goblins left!");

    } catch (error) {
        window.alert("Contract not connected to this network!");
    }
    
    console.log(totalSupply);
    if (typeof updateCombine !== "undefined") {
      updateCombine();
    }
}


$('#buy-now-button').click(async function () {
  if (connected && started) {
    if (!contract) {
      window.alert("Not connected to the ETH network!")
    } else {
      contract.methods.mint(amount).send({ from: accounts[0], value: 30000000000000000*amount }).then(
        function(res) {
          let rangeInput = document.querySelector(".range-input input");
        }
      ).catch(function() {
        let rangeInput = document.querySelector(".range-input input");
      });   
    }
  } else {
    if(started) {
      window.alert("You need to connect your metamask wallet before buying!");
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        setUpBlockchain();
      }
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        setUpBlockchain();
      }
      else {
        window.alert("No MetaMask wallet detected!")
      }
    }
  }
})


$('.button-2').click(function() {
  $('.button-2').css('background-color', 'white');
  $('.button-2').css('color', 'black');

  $(this).css('background-color', 'black');
  $(this).css('color', 'white');
  amount = parseInt($(this).data('amount'));
  console.log(amount);
});

async function updateSupply() {
  let totalSupply = await contract.methods.totalSupply().call();
  console.log("updating supply: " + totalSupply);
  $("#js-clock-days").text("" + (10000-totalSupply));
}

(function() {
  var countDownDate = new Date(Date.UTC(2021, 6, 18, 22, 00, 0)).getTime();
  function pad(num, size) {
      var s = "0" + num;
      return s.substr(s.length-size);
  }
  function getTimeRemaining() {
    var t = countDownDate - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function clock(id) {
    var days = document.getElementById(id + '-days')
        hours = document.getElementById(id + '-hours'),
        minutes = document.getElementById(id + '-minutes'),
        seconds = document.getElementById(id + '-seconds');
    var timeinterval = setInterval(function() {
      var t = getTimeRemaining();
      if (t.total <= 0){
        console.log("Minting has started!")
        clearInterval(timeinterval);
        started = true;
        $('#js-clock').html(`
          <div class="box">
            <div id="js-clock-days" class="clock-number">10000</div>
            <div class="clock-label" style="white-space: nowrap;">Whales left!</div>
          </div>
        `);
        setInterval(updateSupply, 2000);
      } else {
  days.innerHTML = pad(t.days, 2);
  hours.innerHTML = pad(t.hours, 2);
  minutes.innerHTML = pad(t.minutes, 2);
  seconds.innerHTML = pad(t.seconds, 2);
  }
    }, 1000);
  }
  clock('js-clock');
})();

