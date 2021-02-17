export interface Poll{
  id: number; //12
  question: string; // Which days of the week youlike most;
  results: number[]; //[0,0,1,3,5,22,33,112]
  options: string[]; // ['monday', 'tuesday',..]
  thumbnail: string; // http://image.png
  voted: boolean;
}

export interface Voter{
  id: string; //0xfsjjsfgbjhbgjfgj
  voted: number[];


}
