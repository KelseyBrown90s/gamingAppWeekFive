class Game {
    constructor(name,story){
        this.name=name;
        this.story=story;
    }
    describe(){
        return '${this.name} is best described as ${this.story}';
    }
}

class GamingCatalog{
    constructor(name){
        this.name=name;
        this.games=[];
    }
    addGame(game){
        if(game instanceof Game ){
            this.games.push(game);
        }else{
            throw new Error(' You can only add an instance of a game. Arguement is not a game: ${game}');
        }
    }

    describe(){
        return '${this.name} has ${this.games.length} games.'; 
    }
}

    class Menu {
        constructor(){
         this.GamingCatalog=[];
         // (This is to indicate their will be multiple of these thus being GamingCatalogs).
         this.selectedGamingCatalog = null;
        }
        start(){
            let selection = this.ShowMainMenuOptions();
            while(selection != 0){
                switch(selection){
                    case '1' :
                        this.createGamingCatalog();
                        break;
                    case '2' :
                        this.viewGamingCatalog();
                        break;
                    case '3' :
                        this.deleteGamingCatalog();
                        break;
                    case '4' :
                        this.displayGamingCatalogs();
                        break;
                    default:
                        selection = 0 ;


                }
                selection = this.ShowMainMenuOptions();
            } 
            alert('Goodbye!');
        }
          ShowMainMenuOptions(){
            return prompt('0)exit  1) create new gamingcatalog 2) view gamingcatalog  3) delete gamingcatalog  4) display all gamingcatalogs');
          }
           showGamingCatalogMenuOptions(GamingCatalogInfo){
                return prompt ('0) back 1) create game 2)delete game -------- ${gamingcatalogInfo}');
               //I was having issues with separating both prompts by new lines, so I decided to keep all options one 1 line.
          }
          displayGamingCatalogs() {
            let GamingCatalogString = '';
            for(let i=0;i < this.GamingCatologs.length;i++){
                 GamingCatalogString += i + ')' + GamingCatalogs[i].name + '\n';
            }
            alert(GamingCatalogString);
          }
          createGamingCatalog(){
            let name = prompt(' Enter name for new gamingcatalog:');
            this.GamingCatalogs.push(new GamingCatalog(name));
          }
          viewGamingCatalog(){
            let index = prompt('Enter the index of the gaming catalog you wish to view:');
            if(index > -1 && index < this.GamingCatalogs.length){
                this.selectedGamingCatalog = this.GamingCatalogs[index];
                let description = 'GamingCatalog Name:' + this.selectedGamingCatalog.name + '\n';
                for(let i = 0; i < this.selectedGamingCatalog.games.length;i++){
                    description += i + ')' + this.selectedGamingCatalog.games[i].name + ' - ' + this.selectedGamingCatalog.games[i].story + '\n';

                }
                let selection = this.ShowGamingCatalogMenuOptions(description);
                switch(selection){
                    case '1':
                        this.createGame();
                        break;
                    case '2':
                        this.deleteGame();
                }
            }
          }
        deleteGamingCatalog(){
            let index = prompt('Enter the index of the GamingCatalog you wish to delete:');
            if(index > -1 && index < this.GamingCatalogs.length){
                this.GamingCatalogs.splice(index,1);
            }
        }
        createGame(){
            let name = prompt('Enter name for new game:');
            let story = prompt('Enter story for new game');
            this.selectedGamingCatalog.games.push(new Game(name,story));
          }
          deleteGame(){
            let index = prompt('Enter the index of the game you wish to delete:');
            if(index > -1 && index < this.selectedGamingCatalog.games.length ){
               this.selectedGamingCatalog.games.splice(index,1);
            }
          }
        
    }

    let menu = new Menu();
    menu.start();
