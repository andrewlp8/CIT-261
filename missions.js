

// load mission click spinning globe
function initMap() {
             
// declare min to max for rand num generator
var min = 1;
var max = 100;

// name of location & info
var name;
var info;

// Latitude
var x;

// Longitude
var y;

    switch (Math.floor(Math.random() * (max - min + 1) + min)) {
        // Adriatic North Mission
        case 1:
            name = "Adriatic North Mission";
            x = 45.815011;
            y = 15.981919;
            info = '<div class="embed-container"><iframe width="854" height="480" src="https://www.youtube.com/embed/VdsWt0pMxW4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/adriatic-north-mission/">Click to Learn More</a><br><br/>';
            break;
        // Adriatic South Mission
        case 2:
            name = "Adriatic South Mission";
            x = 41.327546;
            y = 19.818698;
            info = '<div class="embed-container"><iframe width="854" height="480" src="https://www.youtube.com/embed/lw7WE6-5iL8?list=PLo6WmFbBTUezdwzrj7IwjBZTm96UKqv5T" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/adriatic-south-mission/">Click to Learn More</a>';
            break;
        // Alabama Birmingham Mission
        case 3:
            name = "Alabama Birmingham Mission<br> *This is the best Mission, it's the one I served in.*<br>";
            x = 33.520661;
            y = -86.802490;
            info = '<div class="embed-container"><iframe src="https://www.youtube.com/embed/nFS-tAwJjhg" frameborder="0" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/alabama-birmingham-mission/">Click to Learn More</a>';
            break;
        // Alaska Anchorage Mission
        case 4:
            name = "Alaska Anchorage Mission";
            x = 61.218056;
            y = -149.900278;
            info = '<div class="embed-container"><iframe width="854" height="480" src="https://www.youtube.com/embed/db7LFurrTC4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/alaska-anchorage-mission/">Click to Learn More</a>';
            break;
        // Alpine German Speaking Mission
        case 5:
            name = "Alpine German Speaking Mission";
            x = 48.135125;
            y = 11.581980;
            info = '<div class="embed-container"><iframe width="760" height="428" src="https://www.youtube.com/embed/hW-foUHFv3E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/alpine-german-speaking-mission/">Click to Learn More</a>';
            break;    
        // Angola Luanda Mission
        case 6:
            name = "Angola Luanda Mission";
            x = -8.839988;
            y = 13.289437;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/pAqKrKP7liQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/angola-luanda-mission/">Click to Learn More</a>';
            break; 
        // Argentina Bahía Blanca Mission
        case 7:
            name = "Argentina Bahía Blanca Mission";
            x = -34.603684;
            y = -58.381559;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/NyIxz1YmooE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-bahia-blanca-mission/">Click to Learn More</a>';
            break;
        // Argentina Buenos Aires East Mission
        case 8:
            name = "Argentina Buenos Aires East Mission";
            x = -34.608006;
            y = -58.374995;
            info = '<br><br/><div class="container3" style="text-align: left;"><h3>Interesting facts about Buenos Aires</h3><ol><li>People greet each other with a kiss on the cheek.</li><li>The Tango dance originated in Buenos Aires.</li><li>About a third of Argentinians live in the province of Buenos Aires.</li><li>The street Avenida 9 de Julio is one of the widest in the world, with 16 lanes.</li><li>The founders of Stripe lived in Buenos Aires in the early days of the company.</li><li>The University of Buenos Aires was founded in 1821.</li><li>The main soccer teams are River, Plata, San Lorenzo and Indepediente.</li><li>People living in the Capital are called Portenos.</li><li>The majority of people in Buenos Aires are classified as Caucasians.</li><li>The only operating LDS temple in Argentina is in Buenos Aires, as is the Argentina MTC.</li></ol></div><br><a target="_blank" href="http://lifey.org/argentina-buenos-aires-east-mission/">Click to Learn More</a>';
            break;
        // Argentina Buenos Aires North Mission
        case 9:
            name = "Argentina Buenos Aires North Mission";
            x = -34.455445;
            y = -58.584100;
// add some info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/argentina-buenos-aires-north-mission/">Click to Learn More</a>';
            break;
        // Argentina Buenos Aires South Mission
        case 10:
            name = "Argentina Buenos Aires South Mission";
            x = -34.808151;
            y = -58.400752;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/qxZeCOnXLDA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-buenos-aires-south-mission/">Click to Learn More</a>';
            break;
        // Argentina Buenos Aires West Mission
        case 11:
            name = "Argentina Buenos Aires West Mission";
            x = -34.634620;
            y = -58.542240;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/fKH-GD-5HSI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-buenos-aires-west-mission/">Click to Learn More</a>';
            break;
        // Argentina Comodoro Rivadavia Mission
        case 12:
            name = "Argentina Comodoro Rivadavia Mission";
            x = -45.863751;
            y = -67.482909;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/Xl1eug4DEtc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-comodoro-rivadavia-mission/">Click to Learn More</a>';
            break;
        // Argentina Córdoba Mission
        case 13:
            name = "Argentina Córdoba Mission";
            x = -31.420083;
            y = -64.188776;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/y1x_4JnFs88" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-cordoba-mission/">Click to Learn More</a>';
            break;
        // Argentina Mendoza Mission
        case 14:
            name = "Argentina Mendoza Mission";
            x = -32.889459;
            y = -68.845839;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/SWCpzb4umCg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-mendoza-mission/">Click to Learn More</a>';
            break;
        // Argentina Neuquén Mission
        case 15:
            name = "Argentina Neuquén Mission";
            x = -38.951678;
            y = -68.059189;
// add some info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/argentina-neuquen-mission/">Click to Learn More</a>';
            break;
        // Argentina Posadas Mission
        case 16:
            name = "Argentina Posadas Mission";
            x = -27.377707;
            y = -55.923727;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/MfGZQuJWMPo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-posadas-mission/">Click to Learn More</a>';
            break;
        // Argentina Resistencia Mission
        case 17:
            name = "Argentina Resistencia Mission";
            x = -27.451862;
            y = -58.985555;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/qUYuyGUd_1Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-resistencia-mission/">Click to Learn More</a>';
            break;
        // Argentina Rosario Mission
        case 18:
            name = "Argentina Rosario Mission";
            x = -32.944243;
            y = -60.650539;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/oRkLkxByrNA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-rosario-mission/">Click to Learn More</a>';
            break;
        // Argentina Salta Mission
        case 19:
            name = "Argentina Salta Mission";
            x = -24.790529;
            y = -65.408459;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/TcR3tU3WCJc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-salta-mission/">Click to Learn More</a>';
            break;
        // Argentina Santa Fe Mission
        case 20:
            name = "Argentina Santa Fe Mission";
            x = -31.640180;
            y = -60.710310;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/B4IRMqZTM8U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/argentina-santa-fe-mission/">Click to Learn More</a>';
            break;
        // Arizona Gilbert Mission
        case 21:
            name = "Arizona Gilbert Mission";
            x = 33.368281;
            y = -111.781937;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/1_87pLZGIL4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/arizona-gilbert-mission/">Click to Learn More</a>';
            break;
        // Arizona Mesa Mission
        case 22:
            name = "Arizona Mesa Mission";
            x = 33.461571;
            y = -111.761564;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/UOxUeW-gPT0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/arizona-mesa-mission/">Click to Learn More</a>';
            break;
        // Arizona Phoenix Mission
        case 23:
            name = "Arizona Phoenix Mission";
            x = 33.636771;
            y = -112.206640;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/s2K-7txYJ9Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/arizona-phoenix-mission/">Click to Learn More</a>';
            break;
        // Arizona Scottsdale Mission
        case 24:
            name = "Arizona Scottsdale Mission";
            x = 33.528127;
            y = -111.903902;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/8SQkoKAh0r8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/arizona-scottsdale-mission/">Click to Learn More</a>';
            break;
        // Arizona Tempe Mission
        case 25:
            name = "Arizona Tempe Mission";
            x = 33.396226;
            y = -111.905864;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/Zs_YX-aLfMg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/arizona-tempe-mission/">Click to Learn More</a>';
            break;
        // Arizona Tucson Mission
        case 26:
            name = "Arizona Tucson Mission";
            x = 32.343970;
            y = -110.986522;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/F0HqqV5Z9U4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/arizona-tucson-mission/">Click to Learn More</a>';
            break;
        // Arkansas Bentonville Mission
        case 27:
            name = "Arkansas Bentonville Mission";
            x = 36.382240;
            y = -94.170694;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/lRS_BgCD_mE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/arkansas-bentonville-mission/">Click to Learn More</a>';
            break;
        // Arkansas Little Rock Mission
        case 28:
            name = "Arkansas Little Rock Mission";
            x = 34.816389;
            y = -92.255005;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/G0dC0oUjhJs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/arkansas-little-rock-mission/">Click to Learn More</a>';
            break;
        // Armenia Yerevan Mission
        case 29:
            name = "Armenia Yerevan Mission";
            x = 40.207149;
            y = 44.512295;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/EnpRPBsqxgg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/armenia-yerevan-mission/">Click to Learn More</a>';
            break;
        // Australia Adelaide Mission
        case 30:
            name = "Australia Adelaide Mission";
            x = -34.896389;
            y = 138.639167;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/australia-adelaide-mission/">Click to Learn More</a>';
            break;
        // Australia Brisbane Mission
        case 31:
            name = "Australia Brisbane Mission";
            x = -27.431888;
            y = 153.065235;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/6bWq-zquQhs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/australia-brisbane-mission/">Click to Learn More</a>';
            break;
        // Australia Melbourne Mission
        case 32:
            name = "Australia Melbourne Mission";
            x = -37.868873;
            y = 145.214348;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/BiFw_R87nr8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/australia-melbourne-mission/">Click to Learn More</a>';
            break;
        // Australia Perth Mission
        case 33:
            name = "Australia Perth Mission";
            x = -31.898000;
            y = 115.834000;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/8ufjqo8GzNU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/australia-perth-mission/">Click to Learn More</a>';
            break;
        // Australia Sydney Mission
        case 34:
            name = "Australia Sydney Mission";
            x = -33.775673;
            y = 151.050683;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/anoTJNDBwcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/australia-sydney-mission/">Click to Learn More</a>';
            break;
        // Australia Sydney North Mission
        case 35:
            name = "Australia Sydney North Mission";
            x = -33.776466;
            y = 151.052370;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/NKnhegKwu3E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/australia-sydney-north-mission/">Click to Learn More</a>';
            break;
        // Australia Sydney South Mission
        case 36:
            name = "Australia Sydney South Mission";
            x = -33.969320;
            y = 151.069690;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/australia-sydney-south-mission/">Click to Learn More</a>';
            break;
        // Baltic Mission
        case 37:
            name = "Baltic Mission";
            x = 56.964306;
            y = 24.146354;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/baltic-mission/">Click to Learn More</a>';
            break;
        // Barbados Bridgetown Mission
        case 38:
            name = "Barbados Bridgetown Mission";
            x = 13.074171;
            y = -59.595721;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/barbados-bridgetown-mission/">Click to Learn More</a>';
            break;
        // Belgium/Netherlands Mission
        case 39:
            name = "Belgium/Netherlands Mission";
            x = 52.166660;
            y = 4.484716;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/XsEmRM43bSs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/belgium-netherlands-mission/">Click to Learn More</a>';
            break;
        // Benin Cotonou Mission
        case 40:
            name = "Benin Cotonou Mission";
            x = 6.370293;
            y = 2.391236;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/1LT307w4cIE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/benin-cotonou-mission/">Click to Learn More</a>';
            break;                          
        // Bolivia Cochabamba Mission
        case 41:
            name = "Bolivia Cochabamba Mission";
            x = -17.413977;
            y = -66.165322;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/tKbEeqgxMb0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/bolivia-cochabamba-mission/">Click to Learn More</a>';
            break;
        // Bolivia La Paz Mission
        case 42:
            name = "Bolivia La Paz Mission";
            x = -16.489689;
            y = -68.119294;                           
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/bolivia-la-paz-mission/">Click to Learn More</a>';
            break;
        // Bolivia La Paz El Alto Mission
        case 43:
            name = "Bolivia La Paz El Alto Mission";
            x = -16.511176;
            y = -68.125430;
//                                 Interesting facts about La Paz
// La Paz was founded in 1548.
// The city is home to El Alto International Airport.
// La Paz is the highest capital in the world at nearly 12,000 feet.
// The largest prison in Bolivia, San Pedro Prison is located in La Paz, where inmates take leadership roles in the prison.
// Penas are club restaurants in the city that play traditional Andean music.
// La Paz is a co-capital of Bolivia, with the city Sucre.
// Tin mining is a major industry in La Paz.
// La Paz is a more liberal city within Bolivia.
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/bolivia-la-paz-el-alto-mission/">Click to Learn More</a>';
            break;
        // Bolivia Santa Cruz Mission
        case 44:
            name = "Bolivia Santa Cruz Mission";
            x = -17.772256;
            y = -63.182917;                             
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/DFTrfC-PZ3g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/bolivia-santa-cruz-mission/">Click to Learn More</a>';
            break;
        // Bolivia Santa Cruz North Mission
        case 45:
            name = "Bolivia Santa Cruz North Mission";
            x = -17.790037;
            y = -63.181886;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/bolivia-santa-cruz-north-mission/">Click to Learn More</a>';
            break;
        // Botswana Gaborone Mission
        case 46:
            name = "Botswana Gaborone Mission";
            x = -24.628208;
            y = 25.923147;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/botswana-gaborone-mission/">Click to Learn More</a>';
            break;
        // Botswana/Namibia Mission
        case 47:
            name = "Botswana/Namibia Mission";
            x = -22.328474;
            y = 24.684866;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/EoybZKCKDQc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/botswana-namibia-mission/">Click to Learn More</a>';
            break;
        // Brazil Belém Mission
        case 48:
            name = "Brazil Belém Mission";
            x = -1.453156;
            y = -48.488058;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/ln0SzEoZKL4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-belem-mission/">Click to Learn More</a>';
            break;
        // Brazil Belo Horizonte Mission
        case 49:
            name = "Brazil Belo Horizonte Mission";
            x = -23.550520;
            y = -46.633309;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/pA7oZIgJxz4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-belo-horizonte-mission/">Click to Learn More</a>';
            break;
        // Brazil Brasília Mission
        case 50:
            name = "Brazil Brasília Mission";
            x = -15.808131;
            y = -47.943776;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/brazil-brasilia-mission/">Click to Learn More</a>';
            break;
        // Brazil Campinas Mission
        case 51:
            name = "Brazil Campinas Mission";
            x = -22.908410;
            y = -47.055375;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/CC2gSjaSYSE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-campinas-mission/">Click to Learn More</a>';
            break;
        // Brazil Cuiabá Mission
        case 52:
            name = "Brazil Cuiabá Mission";
            x = -15.585420;
            y = -56.081195;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/NmVeBbNoOzc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>v</div><br><a target="_blank" href="http://lifey.org/brazil-cuiaba-mission/">Click to Learn More</a>';
            break;
        // Brazil Curitiba Mission
        case 53:
            name = "Brazil Curitiba Mission";
            x = -25.448217;
            y = -49.285144;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/Fc-8zAfKYrM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-curitiba-south-mission/">Click to Learn More</a>';
            break;
        // Brazil Curitiba South Mission
        case 54:
            name = "Brazil Curitiba South Mission";
            x = -25.453071;
            y = -49.277923;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/Fc-8zAfKYrM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-curitiba-south-mission/">Click to Learn More</a>';
            break;
        // Brazil Florianópolis Mission
        case 55:
            name = "Brazil Florianópolis Mission";
            x = -27.591588;
            y = -48.548108;                              
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/oewObFvtAEQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-florianopolis-mission/">Click to Learn More</a>';
            break;
        // Brazil Fortaleza East Mission
        case 56:
            name = "Brazil Fortaleza East Mission";
            x = -3.789259;
            y = -38.481391;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/brazil-fortaleza-east-mission/">Click to Learn More</a>';
            break;
        // Brazil Fortaleza Mission
        case 57:
            name = "Brazil Fortaleza Mission";
            x = -3.733010;
            y = -38.507822;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/4XRbZpc0RgM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-fortaleza-mission/">Click to Learn More</a>';
            break;                   
        // Brazil Goiânia Mission
        case 58:
            name = "Brazil Goiânia Mission";
            x = -16.686528;
            y = -49.260978;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/brazil-goiania-mission/">Click to Learn More</a>';
            break; 
        // Brazil João Pessoa Mission
        case 59:
            name = "Brazil João Pessoa Mission";
            x = -7.125827;
            y = -34.878012;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/rzSi4UkBOhY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-joao-pessoa-mission/">Click to Learn More</a>';
            break; 
        // Brazil Juiz de Fora Mission
        case 60:
            name = "Brazil Juiz de Fora Mission";
            x = -21.768754;
            y = -43.347594;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/TlOYNO5qN4s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-juiz-de-fora-mission/">Click to Learn More</a>';
            break; 
        // Brazil Londrina Mission
        case 61:
            name = "Brazil Londrina Mission";
            x = -23.315202;
            y = -51.167158;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/IfxlfTBvOuY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-londrina-mission/">Click to Learn More</a>';
            break; 
        // Brazil Maceió Mission
        case 62:
            name = "Brazil Maceió Mission";
            x = -9.658279;
            y = -35.731944;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/tvLjO7uLM14" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-maceio-mission/">Click to Learn More</a>';
            break; 
        // Brazil Manaus Mission
        case 63:
            name = "Brazil Manaus Mission";
            x = -3.080583;
            y = -60.033874;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/11abMbJl7cU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-manaus-mission/">Click to Learn More</a>';
            break; 
        // Brazil Natal Mission
        case 64:
            name = "Brazil Natal Mission";
            x = -5.819503;
            y = -35.231419;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/LPBQp5rHh_Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-natal-mission/">Click to Learn More</a>';
            break; 
        // Brazil Piracicaba Mission
        case 65:
            name = "Brazil Piracicaba Mission";
            x = -22.731281;
            y = -47.663628;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/siN7tUt2cZw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-piracicaba-mission/">Click to Learn More</a>';
            break; 
        // Brazil Porto Alegre North Mission
        case 66:
            name = "Brazil Porto Alegre North Mission";
            x = -30.013867;
            y = -51.155518;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/pNG6tgJpLSU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-porto-alegre-north-mission/">Click to Learn More</a>';
            break; 
        // Brazil Porto Alegre South Mission
        case 67:
            name = "Brazil Porto Alegre South Mission";
            x = -30.048751;
            y = -51.209328;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/j1IfaVPDyz0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-porto-alegre-south-mission/">Click to Learn More</a>';
            break; 
        // Brazil Recife Mission
        case 68:
            name = "Brazil Recife Mission";
            x = -8.060265;
            y = -34.891222;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/brazil-recife-mission/">Click to Learn More</a>';
            break; 
        // Brazil Ribeirão Preto Mission
        case 69:
            name = "Brazil Ribeirão Preto Mission";
            x = -21.178596;
            y = -47.806198;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/y6HyJpT9Zg8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-ribeirao-preto-mission/">Click to Learn More</a>';
            break; 
        // Brazil Rio de Janeiro Mission
        case 70:
            name = "Brazil Rio de Janeiro Mission";
            x = -22.929688;
            y = -43.176908;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/hJJtnDMMnY8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-rio-de-janeiro-mission/">Click to Learn More</a>';
            break; 
        // Brazil Salvador Mission
        case 71:
            name = "Brazil Salvador Mission";
            x = -12.987080;
            y = -38.467733;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/0zK1CUd-7sk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-salvador-mission/">Click to Learn More</a>';
            break; 
        // Brazil Salvador South Mission
        case 72:
            name = "Brazil Salvador South Mission";
            x = -13.006547;
            y = -38.489852;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/brazil-salvador-south-mission/">Click to Learn More</a>';
            break; 
        // Brazil Santa Maria Mission
        case 73:
            name = "Brazil Santa Maria Mission";
            x = -29.689211;
            y = -53.827811;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/FDFWlBuT4SQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-santa-maria-mission/">Click to Learn More</a>';
            break; 
        // Brazil Santos Mission
        case 74:
            name = "Brazil Santos Mission";
            x = -23.962364;
            y = -46.332655;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/A0KANQJqJrQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-santos-mission/">Click to Learn More</a>';
            break; 
        // Brazil São Paulo East Mission
        case 75:
            name = "Brazil São Paulo East Mission";
            x = -23.547302;
            y = -46.591850;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/OBzOut1iRXw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-sao-paulo-east-mission/">Click to Learn More</a>';
            break; 
        // Brazil São Paulo Interlagos Mission
        case 76:
            name = "Brazil São Paulo Interlagos Mission";
            x = -23.649154;
            y = -46.700454;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/1Iyb6laweb4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-sao-paulo-interlagos-mission/">Click to Learn More</a>';
            break; 
        // Brazil São Paulo North Mission
        case 77:
            name = "Brazil São Paulo North Mission";
            x = -23.484790;
            y = -46.615070;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/qLXTMGcOQKA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-sao-paulo-north-mission/">Click to Learn More</a>';
            break; 
        // Brazil São Paulo South Mission
        case 78:
            name = "Brazil São Paulo South Mission";
            x = -23.635170;
            y = -46.643890;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/JbOvGjbSvAI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-sao-paulo-south-mission/">Click to Learn More</a>';
            break; 
        // Brazil São Paulo West Mission
        case 79:
            name = "Brazil São Paulo West Mission";
            x = -23.583070;
            y = -46.720767;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/brazil-sao-paulo-west-mission/">Click to Learn More</a>';
            break; 
        // Brazil Teresina Mission
        case 80:
            name = "Brazil Teresina Mission";
            x = -5.087680;
            y = -42.797958;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/brazil-teresina-mission/">Click to Learn More</a>';
            break; 
        // Brazil Vitória Mission
        case 81:
            name = "Brazil Vitória Mission";
            x = -20.312769;
            y = -40.295580;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/YHv7P0JgRTU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/brazil-vitoria-mission/">Click to Learn More</a>';
            break; 
        // Bulgaria Sofia Mission
        case 82:
            name = "Bulgaria Sofia Mission";
            x = 42.695678;
            y = 23.342934;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/uTyKNOBrFF0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/bulgaria-sofia-mission/">Click to Learn More</a>';
            break; 
        // California Anaheim Mission
        case 83:
            name = "California Anaheim Mission";
            x = 33.770508;
            y = -117.885261;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/sR1idHqgXN8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-anaheim-mission/">Click to Learn More</a>';
            break;
        // California Arcadia Mission
        case 84:
            name = "California Arcadia Mission";
            x = 34.149973;
            y = -118.051084;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/g7LlUImaX3E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-arcadia-mission/">Click to Learn More</a>';
            break;
        // California Bakersfield Mission
        case 85:
            name = "California Bakersfield Mission";
            x = 35.391575;
            y = -119.091489;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/y3gm-tUQGiI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-bakersfield-mission/">Click to Learn More</a>';
            break;
        // California Carlsbad Mission
        case 86:
            name = "California Carlsbad Mission";
            x = 33.222106;
            y = -117.252823;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/Pv32mUe6EVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-carlsbad-mission/">Click to Learn More</a>';
            break;
        // California Fresno Mission
        case 87:
            name = "California Fresno Mission";
            x = 36.767006;
            y = -119.803610;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/GvB_DzXuPz4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-fresno-mission/">Click to Learn More</a>';
            break;
        // California Irvine Mission
        case 88:
            name = "California Irvine Mission";
            x = 33.678011;
            y = -117.804097;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/qoi99KAgI2o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-irvine-mission/">Click to Learn More</a>';
            break;
        // California Long Beach Mission
        case 89:
            name = "California Long Beach Mission";
            x = 33.788193;
            y = -118.105364;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/FSM-qoN16S0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-long-beach-mission/">Click to Learn More</a>';
            break;
        // California Los Angeles Mission
        case 90:
            name = "California Los Angeles Mission";
            x = 34.055126;
            y = -118.435181;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/N8IAY0s0WwA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div><br><a target="_blank" href="http://lifey.org/california-los-angeles-mission/">Click to Learn More</a>';
            break;
        // California Modesto Mission
        case 91:
            name = "California Modesto Mission";
            x = 37.702358;
            y = -121.049187;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/california-modesto-mission/">Click to Learn More</a>';
            break;
        // California Oakland-San Francisco Mission
        case 92:
            name = "California Oakland-San Francisco Mission";
            x = 37.811845;
            y = -122.200013;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/D6aMAtuh3sU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div><br><a target="_blank" href="http://lifey.org/california-oakland-san-francisco-mission/">Click to Learn More</a>';
            break;
        // California Rancho Cucamonga Mission
        case 93:
            name = "California Rancho Cucamonga Mission";
            x = 34.135497;
            y = -117.554171;
            info = '<div class="embed-container"> <iframe width="670" height="377" src="https://www.youtube.com/embed/reMzGZeaaJY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-rancho-cucamonga-mission/">Click to Learn More</a>';
            break;
        // California Redlands Mission
        case 94:
            name = "California Redlands Mission";
            x = 34.126655;
            y = -117.218088;
            info = '<div class="embed-container"> <iframe width="670" height="377" src="https://www.youtube.com/embed/OdRqtdMWRBE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-redlands-mission/">Click to Learn More</a>';
            break;
        // California Riverside Mission
        case 95:
            name = "California Riverside Mission";
            x = 33.963563;
            y = -117.410944;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/california-riverside-mission/">Click to Learn More</a>';
            break;
        // California Roseville Mission
        case 96:
            name = "California Roseville Mission";
            x = 38.725143;
            y = -121.393719;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/9nDb0H9XtiE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div><br><a target="_blank" href="http://lifey.org/california-roseville-mission/">Click to Learn More</a>';
            break;
        // California Sacramento Mission
        case 97:
            name = "California Sacramento Mission";
            x = 38.667111;
            y = -121.255368;
            info = '<div class="embed-container"> <iframe width="670" height="377" src="https://www.youtube.com/embed/6a9PSxUz5po" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-sacramento-mission/">Click to Learn More</a>';
            break;
        // California San Diego Mission
        case 98:
            name = "California San Diego Mission";
            x = 32.804486;
            y = -117.161983;
            info = '<div class="embed-container"> <iframe width="670" height="377" src="https://www.youtube.com/embed/SyXtJM91cqc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-san-diego-mission/">Click to Learn More</a>';
            break;
        // California San Fernando Mission
        case 99:
            name = "California San Fernando Mission";
            x = 34.379071;
            y = -118.545189;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/pgSONG8Nt9g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div><br><a target="_blank" href="http://lifey.org/california-san-fernando-mission/">Click to Learn More</a>';
            break;
        // California San Jose Mission
        case 100:
            name = "California San Jose Mission";
            x = 37.302274;
            y = -121.903663;
            info = '<div class="embed-container"> <iframe width="670" height="377" src="https://www.youtube.com/embed/yStRze8Ljd0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="http://lifey.org/california-san-jose-mission/">Click to Learn More</a>';
            break;
        // California Santa Rosa Mission
        case 101:
            name = "California Santa Rosa Mission";
            x = 38.483968;
            y = -122.661917;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/CKQhtwwFBrI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div><br><a target="_blank" href="http://lifey.org/california-santa-rosa-mission/">Click to Learn More</a>';
            break;
        // California Ventura Mission
        case 102:
            name = "California Ventura Mission";
            x = 34.220017;
            y = -119.212963;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/0_m-mDlxWtY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div><br><a target="_blank" href="http://lifey.org/california-ventura-mission/">Click to Learn More</a>';
            break;
        // Cambodia Phnom Penh Mission
        case 103:
            name = "Cambodia Phnom Penh Mission";
            x = 11.555611;
            y = 104.928339;
            info = '<div class="embed-container"><iframe width="670" height="377" src="https://www.youtube.com/embed/JLtkAryfYRA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div><br><a target="_blank" href="http://lifey.org/cambodia-phnom-penh-mission/">Click to Learn More</a>';
            break;
        // Canada Calgary Mission
        case 104:
            name = "Canada Calgary Mission";
            x = 50.992518;
            y = -114.057660;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/canada-calgary-mission/">Click to Learn More</a>';
            break;
        // Canada Edmonton Mission
        case 105:
            name = "Canada Edmonton Mission";
            x = 53.487459;
            y = -113.465751;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/canada-edmonton-mission/">Click to Learn More</a>';
            break;
        // Canada Halifax Mission
        case 106:
            name = "Canada Halifax Mission";
            x = 44.698098;
            y = -63.581330;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/canada-halifax-mission/">Click to Learn More</a>';
            break;
        // Canada Montreal Mission
        case 107:
            name = "Canada Montreal Mission";
            x = 45.526649;
            y = -73.586114;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/canada-montreal-mission/">Click to Learn More</a>';
            break;
        // Canada Toronto Mission
        case 108:
            name = "Canada Toronto Mission";
            x = 43.694486;
            y = -79.849019;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/canada-toronto-mission/">Click to Learn More</a>';
            break;
        // Canada Vancouver Mission
        case 109:
            name = "Canada Vancouver Mission";
            x = 49.140458;
            y = -123.130178;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/canada-vancouver-mission/">Click to Learn More</a>';
            break;
        // Canada Winnipeg Mission
        case 110:
            name = "Canada Winnipeg Mission";
            x = 49.874369;
            y = -97.192547;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/canada-winnipeg-mission/">Click to Learn More</a>';
            break;
        // Cape Verde Praia Mission
        case 111:
            name = "Cape Verde Praia Mission";
            x = 14.906576;
            y = -23.526340;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/cape-verde-praia-mission/">Click to Learn More</a>';
            break;
        // Central Eurasian Mission
        case 112:
            name = "Central Eurasian Mission";
            x = 41.078266;
            y = 29.011631;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/central-eurasian-mission/">Click to Learn More</a>';
            break;
        // Chile Antofagasta Mission
        case 113:
            name = "Chile Antofagasta Mission";
            x = -23.650928;
            y = -70.397502; 
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-antofagasta-mission/">Click to Learn More</a>';
            break;
        // Chile Concepción Mission
        case 114:
            name = "Chile Concepción Mission";
            x = -36.819665;
            y = -73.051024;
// add info                               
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-concepcion-mission/">Click to Learn More</a>';
            break;
        // Chile Concepción South Mission
        case 115:
            name = "Chile Concepción South Mission";
            x = -36.819665;
            y = -73.051024;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-concepcion-south-mission/">Click to Learn More</a>';
            break;
        // Chile Osorno Mission
        case 116:
            name = "Chile Osorno Mission";
            x = -40.576190;
            y = -73.114947;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-osorno-mission/">Click to Learn More</a>';
            break;
        // Chile Rancagua Mission
        case 117:
            name = "Chile Rancagua Mission";
            x = -34.161636;
            y = -70.745106;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-rancagua-mission/">Click to Learn More</a>';
            break;
        // Chile Santiago East Mission
        case 118:
            name = "Chile Santiago East Mission";
            x = -33.417463;
            y = -70.558360;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-santiago-east-mission/">Click to Learn More</a>';
            break;
        // Chile Santiago North Mission
        case 119:
            name = "Chile Santiago North Mission";
            x = -33.416520;
            y = -70.638964;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-santiago-north-mission/">Click to Learn More</a>';
            break;
        // Chile Santiago South Mission
        case 120:
            name = "Chile Santiago South Mission";
            x = -33.585448;
            y = -70.698736;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-santiago-south-mission/">Click to Learn More</a>';
            break;
        // Chile Santiago West Mission
        case 121:
            name = "Chile Santiago West Mission";
            x = -33.506665;
            y = -70.757092;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-santiago-west-mission/">Click to Learn More</a>';
            break;
        // Chile Viña del Mar Mission
        case 122:
            name = "Chile Viña del Mar Mission";
            x = -33.019834;
            y = -71.545549;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/chile-vina-del-mar-mission/">Click to Learn More</a>';
            break;
        // China Hong Kong Mission
        case 123:
            name = "China Hong Kong Mission";
            x = 22.339596;
            y = 114.177645;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/china-hong-kong-mission/">Click to Learn More</a>';
            break;
        // Colombia Barranquilla Mission
        case 124:
            name = "Colombia Barranquilla Mission";
            x = 11.008059;
            y = -74.812078;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colombia-barranquilla-mission/">Click to Learn More</a>';
            break;
        // Colombia Bogotá North Mission
        case 125:
            name = "Colombia Bogotá North Mission";
            x = 4.656130;
            y = -74.057946;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colombia-bogota-north-mission/">Click to Learn More</a>';
            break;
        // Colombia Bogotá South Mission
        case 126:
            name = "Colombia Bogotá South Mission";
            x = 4.656130;
            y = -74.057946;
// add info
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colombia-bogota-south-mission/">Click to Learn More</a>';
            break;
        // Colombia Cali Mission
        case 127:
            name = "Colombia Cali Mission";
            x = 3.452018;
            y = -76.552281;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colombia-cali-mission/">Click to Learn More</a>';
            break;
        // Colombia Medellín Mission
        case 128:
            name = "Colombia Medellín Mission";
            x = 6.197537;
            y = -75.573632;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colombia-medellin-mission/">Click to Learn More</a>';
            break;
        // Colorado Colorado Springs Mission
        case 129:
            name = "Colorado Colorado Springs Mission";
            x = 38.811968;
            y = -104.750916;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colorado-colorado-springs-mission/">Click to Learn More</a>';
            break;
        // Colorado Denver North Mission
        case 130:
            name = "";
            x = 39.935051;
            y = -105.071185;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colorado-denver-north-mission/">Click to Learn More</a>';
            break;
        // Colorado Denver South Mission
        case 131:
            name = "";
            x = 39.633575;
            y = -104.976398;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colorado-denver-south-mission/">Click to Learn More</a>';
            break;
        // Colorado Fort Collins Mission
        case 132:
            name = "";
            x = 40.487426;
            y = -104.895725;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/colorado-fort-collins-mission/">Click to Learn More</a>';
            break;
        // Connecticut Hartford Mission
        case 133:
            name = "";
            x = 41.827936;
            y = -72.735254;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/connecticut-hartford-mission/">Click to Learn More</a>';
            break;
        // Costa Rica San Jose East Mission
        case 134:
            name = "";
            x = 9.928069;
            y = -84.090725;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/costa-rica-san-jose-east-mission/">Click to Learn More</a>';
            break;
        // Costa Rica San Jose West Mission
        case 135:
            name = "";
            x = 9.928069;
            y = -84.090725;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/costa-rica-san-jose-west-mission/">Click to Learn More</a>';
            break;
        // Czech/Slovak Mission
        case 136:
            name = "";
            x = 50.097040;
            y = 14.407552;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/czech-slovak-mission/">Click to Learn More</a>';
            break;
        // Democratic Republic of the Congo Kinshasa Mission
        case 137:
            name = "";
            x = -4.325537;
            y = 15.287307;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/democratic-republic-of-the-congo-kinshasa-mission/">Click to Learn More</a>';
            break;
        // Democratic Republic of the Congo Lubumbashi Mission
        case 138:
            name = "";
            x = -11.666400;
            y = 27.465332;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/democratic-republic-of-the-congo-lubumbashi-mission/">Click to Learn More</a>';
            break;
        // Democratic Republic of the Congo Mbuji-Mayi Mission
        case 139:
            name = "";
            x = -6.112832;
            y = 23.592961;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/democratic-republic-of-the-congo-mbuji-mayi-mission/">Click to Learn More</a>';
            break;
        // Denmark Copenhagen Mission
        case 140:
            name = "";
            x = 55.693996;
            y = 12.532343;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/denmark-copenhagen-mission/">Click to Learn More</a>';
            break;
        // Dominican Republic Santiago Mission
        case 141:
            name = "";
            x = 19.432834;
            y = -70.692503;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/dominican-republic-santiago-mission/">Click to Learn More</a>';
            break;
        // Dominican Republic Santo Domingo East Mission
        case 142:
            name = "";
            x = 18.431954;
            y = -69.672097;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/dominican-republic-santo-domingo-east-mission/">Click to Learn More</a>';
            break;
        // Dominican Republic Santo Domingo West Mission
        case 143:
            name = "";
            x = 18.431954;
            y = -69.672097;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/dominican-republic-santo-domingo-west-mission/">Click to Learn More</a>';
            break;
        // Ecuador Guayaquil North Mission
        case 144:
            name = "";
            x = -2.170998;
            y = -79.922359;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/ecuador-guayaquil-north-mission/">Click to Learn More</a>';
            break;
        // Ecuador Guayaquil South Mission
        case 145:
            name = "";
            x = -2.170998;
            y = -79.922359;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/ecuador-guayaquil-south-mission/">Click to Learn More</a>';
            break;
        // Ecuador Guayaquil West Mission
        case 146:
            name = "";
            x = -2.170998;
            y = -79.922359;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/ecuador-guayaquil-west-mission/">Click to Learn More</a>';
            break;
        // Ecuador Quito Mission
        case 147:
            name = "";
            x = -0.177428;
            y = -78.485941;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/ecuador-quito-mission/">Click to Learn More</a>';
            break;
        // Ecuador Quito North Mission
        case 148:
            name = "";
            x = -0.280079;
            y = -78.494371;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/ecuador-quito-north-mission/">Click to Learn More</a>';
            break;
        // El Salvador San Salvador East Mission
        case 149:
            name = "";
            x = 13.692940;
            y = -89.218191;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/el-salvador-san-salvador-east-mission/">Click to Learn More</a>';
            break;
        // El Salvador San Salvador West/Belize Mission
        case 150:
            name = "";
            x = 13.692940;
            y = -89.218191;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // El Salvador Santa Ana Mission
        case 151:
            name = "";
            x = 13.977828;
            y = -89.563912;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/el-salvador-santa-ana-mission/">Click to Learn More</a>';
            break;
        // England Birmingham Mission
        case 152:
            name = "";
            x = 52.535598;
            y = -1.813402;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/england-birmingham-mission/">Click to Learn More</a>';
            break;
        // England Leeds Mission
        case 153:
            name = "";
            x = 53.845716;
            y = -1.632016;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/england-leeds-mission/">Click to Learn More</a>';
            break;
        // England London Mission
        case 154:
            name = "";
            x = 51.497811;
            y = -0.173445;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/england-london-mission/">Click to Learn More</a>';
            break;
        // England London South Mission
        case 155:
            name = "";
            x = 51.162969;
            y = -0.052985;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/england-london-south-mission/">Click to Learn More</a>';
            break;
        // England Manchester Mission
        case 156:
            name = "";
            x = 51.162969;
            y = -0.052985;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/england-manchester-mission/">Click to Learn More</a>';
            break;
        // Fiji Suva Mission
        case 157:
            name = "";
            x = -18.119757;
            y = 178.438600;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/fiji-suva-mission">Click to Learn More</a>';
            break;
        // Finland Helsinki Mission
        case 158:
            name = "";
            x = 60.216156;
            y = 24.818620;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/finland-helsinki-mission/">Click to Learn More</a>';
            break;
        // Florida Fort Lauderdale Mission
        case 159:
            name = "";
            x = 26.114294;
            y = -80.257702;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/florida-fort-lauderdale-mission/">Click to Learn More</a>';
            break;
        // Florida Jacksonville Mission
        case 160:
            name = "";
            x = 30.228384;
            y = -81.577941;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/florida-jacksonville-mission/">Click to Learn More</a>';
            break;
        // Florida Orlando Mission
        case 161:
            name = "";
            x = 28.411976;
            y = -81.402054;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/florida-orlando-mission/">Click to Learn More</a>';
            break;
        // Florida Tallahassee Mission
        case 162:
            name = "";
            x = 30.505403;
            y = -84.245208;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/florida-tallahassee-mission/">Click to Learn More</a>';
            break;
        // Florida Tampa Mission
        case 163:
            name = "";
            x = 28.069828;
            y = -82.414582;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/florida-tampa-mission/">Click to Learn More</a>';
            break;
        // France Lyon Mission
        case 164:
            name = "";
            x = 45.754046;
            y = 4.855887;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/france-lyon-mission/">Click to Learn More</a>';
            break;
        // France Paris Mission
        case 165:
            name = "";
            x = 48.897794;
            y = 2.113448;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/france-paris-mission/">Click to Learn More</a>';
            break;
        // Georgia Atlanta Mission
        case 166:
            name = "";
            x = 33.428097;
            y = -84.555756;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/georgia-atlanta-mission/">Click to Learn More</a>';
            break;
        // Georgia Atlanta North Mission
        case 167:
            name = "";
            x = 33.853136;
            y = -84.111395;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/georgia-atlanta-north-mission/">Click to Learn More</a>';
            break;
        // Georgia Macon Mission
        case 168:
            name = "";
            x = 32.897214;
            y = -83.704385;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/georgia-macon-mission/">Click to Learn More</a>';
            break;
        // Germany Berlin Mission
        case 169:
            name = "";
            x = 52.419220;
            y = 13.337620;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/germany-berlin-mission/">Click to Learn More</a>';
            break;
        // Germany Frankfurt Mission
        case 170:
            name = "";
            x = 50.105959;
            y = 8.775028;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/germany-frankfurt-mission/">Click to Learn More</a>';
            break;
        // Ghana Accra Mission
        case 171:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="http://lifey.org/ghana-accra-mission/">Click to Learn More</a>';
            break;
        // Ghana Accra West Mission
        case 172:
            name = "Ghana Accra West Mission";
            x = 5.565191;
            y = -0.250994;
            info = '<div class="embed-container"><iframe width="854" height="480" src="https://www.youtube.com/embed/fGGkclfc6w8?list=PLo6WmFbBTUexLc2vwsd7i9jwusoidTkGV" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ghana Cape Coast Mission
        case 173:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ghana Kumasi Mission
        case 174:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Greece Athens Mission
        case 175:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Guatemala Coban Mission
        case 176:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Guatemala Guatemala City Central Mission
        case 177:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Guatemala Guatemala City East Mission
        case 178:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Guatemala Guatemala City South Mission
        case 179:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Guatemala Quetzaltenango Mission
        case 180:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Guatemala Retalhuleu Mission
        case 181:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Haiti Port-au-Prince Mission
        case 182:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Hawaii Honolulu Mission
        case 183:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Honduras Comayaguela Mission
        case 184:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Honduras San Pedro Sula East Mission
        case 185:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Honduras San Pedro Sula West Mission
        case 186:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Honduras Tegucigalpa Mission
        case 187:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Hungary Budapest Mission
        case 188:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Idaho Boise Mission
        case 189:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Idaho Nampa Mission
        case 190:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Idaho Pocatello Mission
        case 191:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Idaho Twin Falls Mission
        case 192:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Illinois Chicago Mission
        case 193:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Illinois Chicago West Mission
        case 194:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Illinois Nauvoo Mission
        case 195:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // India Bangalore Mission
        case 196:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // India New Delhi Mission
        case 197:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Indiana Indianapolis Mission
        case 198:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Indonesia Jakarta Mission
        case 199:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Iowa Des Moines Mission
        case 200:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Italy Milan Mission
        case 201:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Italy Rome Mission
        case 202:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ivory Coast Abidjan Mission
        case 203:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Jamaica Kingston Mission
        case 204:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Japan Fukuoka Mission
        case 205:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Japan Kobe Mission
        case 206:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Japan Nagoya Mission
        case 207:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Japan Sapporo Mission
        case 208:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Japan Sendai Mission
        case 209:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Japan Tokyo Mission
        case 210:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Japan Tokyo South Mission
        case 211:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Kansas Wichita Mission
        case 212:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Kentucky Louisville Mission
        case 213:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Kenya Nairobi Mission
        case 214:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Korea Busan Mission
        case 215:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Korea Daejeon Mission
        case 216:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Korea Seoul Mission
        case 217:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Korea Seoul South Mission
        case 218:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Liberia Monrovia Mission
        case 219:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Louisiana Baton Rouge Mission
        case 220:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Madagascar Antananarivo Mission
        case 221:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Marshall Islands Majuro Mission
        case 222:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Maryland Baltimore Mission
        case 223:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Massachusetts Boston Mission
        case 224:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Aguascalientes Mission
        case 225:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Cancun Mission
        case 226:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Chihuahua Mission
        case 227:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Ciudad Juarez Mission
        case 228:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Ciudad Obregon Mission
        case 229:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Cuernavaca Mission
        case 230:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Culiacán Mission
        case 231:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Guadalajara East Mission
        case 232:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Guadalajara Mission
        case 233:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Hermosillo Mission
        case 234:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Mérida Mission
        case 235:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Mexico City Chalco Mission
        case 236:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Mexico City East Mission
        case 237:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Mexico City North Mission
        case 238:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Mexico City Northwest Mission
        case 239:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Mexico City South Mission
        case 240:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Mexico City Southeast Mission
        case 241:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Mexico City West Mission
        case 242:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Monterrey East Mission
        case 243:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Monterrey West Mission
        case 244:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Oaxaca Mission
        case 245:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Pachuca Mission
        case 246:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Puebla North Mission
        case 247:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Puebla South Mission
        case 248:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Queretaro Mission
        case 249:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Reynosa Mission
        case 250:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Saltillo Mission
        case 251:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Tampico Mission
        case 252:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Tijuana Mission
        case 253:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Torreón Mission
        case 254:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Tuxtla Gutierrez Mission
        case 255:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Veracruz Mission
        case 256:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mexico Villahermosa Mission
        case 257:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Michigan Detroit Mission
        case 258:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Michigan Lansing Mission
        case 259:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Micronesia Guam Mission
        case 260:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Minnesota Minneapolis Mission
        case 261:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mississippi Jackson Mission
        case 262:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Missouri Independence Mission
        case 263:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Missouri St. Louis Mission
        case 264:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mongolia Ulaanbaatar Mission
        case 265:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Montana Billings Mission
        case 266:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Mozambique Maputo Mission
        case 267:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nebraska Omaha Mission
        case 268:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nevada Las Vegas Mission
        case 269:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nevada Las Vegas West Mission
        case 270:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nevada Reno Mission
        case 271:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New Hampshire Manchester Mission
        case 272:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New Jersey Morristown Mission
        case 273:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New Mexico Albuquerque Mission
        case 274:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New Mexico Farmington Mission
        case 275:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New York New York North Mission
        case 276:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New York New York South Mission
        case 277:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New York Rochester Mission
        case 278:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New York Utica Mission
        case 279:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New Zealand Auckland Mission
        case 280:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New Zealand Hamilton Mission
        case 281:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // New Zealand Wellington Mission
        case 282:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nicaragua Managua North Mission
        case 283:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nicaragua Managua South Mission
        case 284:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nigeria Benin City Mission
        case 285:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nigeria Calabar Mission
        case 286:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nigeria Enugu Mission
        case 287:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nigeria Lagos Mission
        case 288:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nigeria Owerri Mission
        case 289:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Nigeria Port Harcourt Mission
        case 290:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // North Carolina Charlotte Mission
        case 291:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // North Carolina Raleigh Mission
        case 292:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // North Dakota Bismarck Mission
        case 293:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Norway Oslo Mission
        case 294:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ohio Cincinnati Mission
        case 295:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ohio Cleveland Mission
        case 296:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ohio Columbus Mission
        case 297:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Oklahoma Oklahoma City Mission
        case 298:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Oregon Eugene Mission
        case 299:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Oregon Portland Mission
        case 300:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Oregon Salem Mission
        case 301:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Panama Panama City Mission
        case 302:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Papua New Guinea Lae Mission
        case 303:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Papua New Guinea Port Moresby Mission
        case 304:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Paraguay Asunción Mission
        case 305:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Paraguay Asunción North Mission
        case 306:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Pennsylvania Philadelphia Mission
        case 307:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Pennsylvania Pittsburgh Mission
        case 308:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Arequipa Mission
        case 309:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Chiclayo Mission
        case 310:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Cusco Mission
        case 311:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Huancayo Mission
        case 312:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Iquitos Mission
        case 313:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Lima Central Mission
        case 314:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Lima East Mission
        case 315:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Lima North Mission
        case 316:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Lima South Mission
        case 317:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Lima West Mission
        case 318:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Piura Mission
        case 319:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Trujillo North Mission
        case 320:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Peru Trujillo South Mission
        case 321:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Angeles Mission
        case 322:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Bacolod Mission
        case 323:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Baguio Mission
        case 324:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Butuan Mission
        case 325:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Cagayan De Oro Mission
        case 326:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Cauayan Mission
        case 327:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Cavite Mission
        case 328:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Cebu East Mission
        case 329:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Cebu Mission
        case 330:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Davao Mission
        case 331:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Iloilo Mission
        case 332:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Laoag Mission
        case 333:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Legazpi Mission
        case 334:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Manila Mission
        case 335:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Naga Mission
        case 336:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Olongapo Mission
        case 337:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Quezon City Mission
        case 338:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Quezon City North Mission
        case 339:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines San Pablo Mission
        case 340:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Tacloban Mission
        case 341:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Philippines Urdaneta Mission
        case 342:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Poland Warsaw Mission
        case 343:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Portugal Lisbon Mission
        case 344:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Portugal Porto Mission
        case 345:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Puerto Rico San Juan Mission
        case 346:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Republic of Congo Brazzaville Mission
        case 347:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Romania / Moldova Mission
        case 348:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Russia Moscow Mission
        case 349:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Russia Novosibirsk Mission
        case 350:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Russia Rostov na Donu Mission
        case 351:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Russia St. Petersburg Mission
        case 352:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Russia Samara Mission
        case 353:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Russia Vladivostok Mission
        case 354:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Russia Yekaterinburg Mission
        case 355:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Samoa Apia Mission
        case 356:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Scotland/Ireland Mission
        case 357:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Sierra Leone Freetown Mission
        case 358:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Singapore Mission
        case 359:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // South Africa Cape Town Mission
        case 360:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // South Africa Durban Mission
        case 361:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // South Africa Johannesburg Mission
        case 362:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // South Carolina Columbia Mission
        case 363:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Spain Barcelona Mission
        case 364:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Spain Madrid Mission
        case 365:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Spain Málaga Mission
        case 366:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Sweden Stockholm Mission
        case 367:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Tahiti Papeete Mission
        case 368:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Taiwan Taichung Mission
        case 369:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Taiwan Taipei Mission
        case 370:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Tennessee Knoxville Mission
        case 371:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Tennessee Nashville Mission
        case 372:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Texas Dallas Mission
        case 373:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Texas Fort Worth Mission
        case 374:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Texas Houston East Mission
        case 375:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Texas Houston Mission
        case 376:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Texas Houston South Mission
        case 377:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Texas Lubbock Mission
        case 378:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Texas McAllen Mission
        case 379:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Texas San Antonio Mission
        case 380:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Thailand Bangkok Mission
        case 381:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Tonga Nukuʻalofa Mission
        case 382:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Trinidad Port of Spain Mission
        case 383:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Uganda Kampala Mission
        case 384:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ukraine Dnepropetrovsk Mission
        case 385:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ukraine Donetsk Mission
        case 386:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ukraine Kyiv Mission
        case 387:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Ukraine L’viv Mission
        case 388:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Uruguay Montevideo Mission
        case 389:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Uruguay Montevideo West Mission
        case 390:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Logan Mission
        case 391:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Ogden Mission
        case 392:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Orem Mission
        case 393:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Provo Mission
        case 394:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Salt Lake City East Mission
        case 395:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Salt Lake City Mission
        case 396:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Salt Lake City South Mission
        case 397:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Salt Lake City Temple Square Mission
        case 398:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah Salt Lake City West Mission
        case 399:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Utah St. George Mission
        case 400:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Vanuatu Port Vila Mission
        case 401:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Venezuela Barcelona Mission
        case 402:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Venezuela Caracas Mission
        case 403:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Venezuela Maracaibo Mission
        case 404:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Venezuela Valencia Mission
        case 405:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Virginia Chesapeake Mission
        case 406:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Virginia Richmond Mission
        case 407:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington Everett Mission
        case 408:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington Federal Way Mission
        case 409:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington Kennewick Mission
        case 410:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington Seattle Mission
        case 411:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington Spokane Mission
        case 412:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington Tacoma Mission
        case 413:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington Vancouver Mission
        case 414:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington Yakima Mission
        case 415:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington, D.C. North Mission
        case 416:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Washington, D.C. South Mission
        case 417:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // West Indies Mission
        case 418:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // West Virginia Charleston Mission
        case 419:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Wisconsin Milwaukee Mission
        case 420:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Zambia Lusaka Mission
        case 421:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // Zimbabwe Harare Mission
        case 422:
            name = "";
            x = 0;
            y = 0;
            info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            break;
        // default
        default:
            name = "Provo, MTC";
            x = 40.260190;
            y = -111.644998;

        // case template
            // case 57:
            // name = "";
            // x = 0;
            // y = 0;
            // info = '<div class="embed-container"> </div><br><a target="_blank" href="">Click to Learn More</a>';
            // break;
    }

    document.getElementById("infoDiv").innerHTML = "You are going to the <br>" + "<strong>" + name + '</strong>' + info + "<br><br/>";
    document.getElementById("missionTitle").innerHTML = name;

// https://www.latlong.net/
// http://lifey.org/lds-missions/


// get location
var location = { lat: x, lng: y };
// The map, centered at location
var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 10, center: location });
// The marker, positioned at location
var marker = new google.maps.Marker({ position: location, map: map });
}