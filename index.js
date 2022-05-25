const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const settings = { method: "GET" }

module.exports = {

    getGuildList() {
            return fetch("https://api.wynncraft.com/public_api.php?action=guildList", settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getGuildStats(guildName){
        return fetch(`https://api.wynncraft.com/public_api.php?action=guildStats&command=${guildName}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getIngredientList(){
        return fetch(`https://api.wynncraft.com/v2/ingredient/list`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getIngredientData(ingredientName){
        return fetch(`https://api.wynncraft.com/v2/ingredient/get/${ingredientName}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    searchIngredient(ingredientName, args){
        return fetch(`https://api.wynncraft.com/v2/ingredient/search/${ingredientName}/${args}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    searchItemCategory(itemCategory){
        return fetch(`https://api.wynncraft.com/public_api.php?action=itemDB&category=${itemCategory}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    searchItem(itemName){
        return fetch(`https://api.wynncraft.com/public_api.php?action=itemDB&search=${itemName}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getGuildLeaderboard(timeframe){
        return fetch(`https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=guild&timeframe=${timeframe}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getPlayerLeaderboard(timeframe){
        return fetch(`https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=player&timeframe=${timeframe}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getPvPLeaderboard(timeframe){
        return fetch(`https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=pvp&timeframe=${timeframe}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getNetworkServerList(){
        return fetch(`https://api.wynncraft.com/public_api.php?action=onlinePlayers`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getNumberOfPlayersOnline(){
        return fetch(`https://api.wynncraft.com/public_api.php?action=onlinePlayersSum`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp.online
            })
    },
    getPlayerData(playerName){
        return fetch(`https://api.wynncraft.com/v2/player/${playerName}/stats`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getRecipe(name){
        return fetch(`https://api.wynncraft.com/v2/recipe/get/${name}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getRecipeList(){
        return fetch(`https://api.wynncraft.com/v2/recipe/list`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    searchRecipe(name, args){
        return fetch(`https://api.wynncraft.com/v2/recipe/search/${name}/${args}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    searchAPI(name){
        return fetch(`https://api.wynncraft.com/public_api.php?action=statsSearch&search=${name}`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    },
    getTerritoriesList(){
        return fetch(`https://api.wynncraft.com/public_api.php?action=territoryList`, settings)
            .then(resp => resp.json())
            .then(resp => {
                return resp
            })
    }
}