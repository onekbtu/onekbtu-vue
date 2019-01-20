import Vue from 'vue';
import Vuex from 'vuex';
import Post from './model';

Vue.use(Vuex);

export interface State {
  all: Post[];
}

const state: State = {
  all: [
    new Post(1, 'Test post #1', 'Make way for Prince Ali\n' +
      'Say hey! It\'s Prince Ali\n' +
      '\n' +
      'Hey! Clear the way in the old Bazaar\n' +
      'Hey you!\n' +
      'Let us through!\n' +
      'It\'s a bright new star!\n' +
      'Oh Come!\n' +
      'Be the first on your block to meet his eye!\n' +
      '\n' +
      'Make way!\n' +
      'Here he comes!\n' +
      'Ring bells! Bang the drums!\n' +
      'Are you gonna love this guy!\n' +
      '\n' +
      'Prince Ali! Fabulous he!\n' +
      'Ali Ababwa\n' +
      'Genuflect, shom some respect\n' +
      'Down on one knee!\n' +
      'Now, try your best to stay calm\n' +
      'Brush up your sunday salaam\n' +
      'The come and meet his spectacular coterie\n' +
      '\n' +
      'Prince Ali!\n' +
      'Mighty is he!\n' +
      'Ali Ababwa\n' +
      'Strong as ten regular men, definitely!\n' +
      'He faced the galloping hordes\n' +
      'A hundred bad guys with swords\n' +
      'Who sent those goons to their lords?\n' +
      'Why, Prince Ali\n' +
      '\n' +
      'He\'s got seventy-five golden camels\n' +
      'Purple peacocks\n' +
      'He\'s got fifty-three\n' +
      'When it comes to exotic-type mammals\n' +
      'Has he got a zoo?\n' +
      'I\'m telling you, it\'s a world-class menagerie\n' +
      '\n' +
      'Prince Ali! Handsome is he, Ali Ababwa\n' +
      'That physique! How can I speak\n' +
      'Weak at the knee\n' +
      'Well, get on out in that square\n' +
      'Adjust your vein and prepare\n' +
      'To gawk and grovel and stare at Prince Ali!\n' +
      '\n' +
      'There\'s no question this Ali\'s alluring\n' +
      'Never ordinary, never boring\n' +
      'Everything about the man just plain impresses\n' +
      'He\'s a winner, he\'s a whiz, a wonder!\n' +
      'He\'s about to pull my heart asunder!\n' +
      'And I absolutely love the way he dresses!\n' +
      '\n' +
      'He\'s got ninety-five white Persian monkeys\n' +
      '(He\'s got the monkeys, let\'s see the monkeys)\n' +
      'And to view them he charges no fee\n' +
      '(He\'s generous, so generous)\n' +
      'He\'s got slaves, he\'s got servants and flunkies\n' +
      '(Proud to work for him)\n' +
      'They bow to his whim love serving him\n' +
      'They\'re just lousy with loyalty to Ali! Prince Ali!\n' +
      '\n' +
      'Prince Ali!\n' +
      'Amorous he! Ali Ababwa\n' +
      'Heard your princess was a sight lovely to see\n' +
      'And that, good people, is why he got dolled up and dropped by\n' +
      'With sixty elephants, llamas galore\n' +
      'With his bears and lions\n' +
      'A brass band and more\n' +
      'With his forty fakirs, his cooks, his bakers\n' +
      'His birds that warble on key\n' +
      'Make way for prince Ali!\n'),
    new Post(2, 'Test post #2', '[Aladdin:]      I can show you the world\n' +
      '                Shining, shimmering, splendid\n' +
      '                Tell me, princess, now when did\n' +
      '                You last let your heart decide?\n' +
      '\n' +
      '                I can open your eyes\n' +
      '                Take you wonder by wonder\n' +
      '                Over, sideways and under\n' +
      '                On a magic carpet ride\n' +
      '\n' +
      '                A whole new world\n' +
      '                A new fantastic point of view\n' +
      '                No one to tell us no\n' +
      '                Or where to go\n' +
      '                Or say we\'re only dreaming\n' +
      '\n' +
      '[Jasmine:]      A whole new world\n' +
      '                A dazzling place I never knew\n' +
      '                But when I\'m way up here\n' +
      '                It\'s crystal clear\n' +
      '                That now I\'m in a whole new world with you\n' +
      '[Aladdin:]      Now I\'m in a whole new world with you\n' +
      '\n' +
      '[Jasmine:]      Unbelievable sights\n' +
      '                Indescribable feeling\n' +
      '                Soaring, tumbling, freewheeling\n' +
      '                Through an endless diamond sky\n' +
      '\n' +
      '                A whole new world\n' +
      '[Aladdin:]      Don\'t you dare close your eyes\n' +
      '[Jasmine:]      A hundred thousand things to see\n' +
      '[Aladdin:]      Hold your breath - it gets better\n' +
      '[Jasmine:]      I\'m like a shooting star\n' +
      '                I\'ve come so far\n' +
      '                I can\'t go back to where I used to be\n' +
      '\n' +
      '[Aladdin:]      A whole new world\n' +
      '[Jasmine:]      Every turn a surprise\n' +
      '[Aladdin:]      With new horizons to pursue\n' +
      '[Jasmine:]      Every moment red-letter\n' +
      '[Both:]         I\'ll chase them anywhere\n' +
      '                There\'s time to spare\n' +
      '                Let me share this whole new world with you\n' +
      '\n' +
      '                A whole new world\n' +
      '                That\'s where we\'ll be\n' +
      '[Aladdin:]      A thrilling chase\n' +
      '[Jasmine:]      A wondrous place\n' +
      '[Both:]         For you and me\n'),
    new Post(3, 'Test post #3', '[Aladdin:]      Gotta keep\n' +
      '                One jump ahead of the breadline\n' +
      '                One swing ahead of the sword\n' +
      '                I steal only what I can\'t afford\n' +
      '                ( That\'s Everything! )\n' +
      '\n' +
      '                One jump ahead of the lawmen\n' +
      '                That\'s all, and that\'s no joke\n' +
      '                These guys don\'t appreciate I\'m broke\n' +
      '\n' +
      '[Crowd:]        Riffraff! Street rat! Scoundrel! Take that!\n' +
      '\n' +
      '[Aladdin:]      Just a little snack, guys\n' +
      '[Crowd:]        Rip him open, take it back, guys\n' +
      '[Aladdin:]      I can take a hint, gotta face the facts\n' +
      '                You\'re my only friend, Abu!\n' +
      '[Crowd:]        Who?\n' +
      '\n' +
      '[Ladies:]       Oh it\'s sad Aladdin\'s hit the bottom\n' +
      '                He\'s become a one-man rise in crime\n' +
      '                I\'d blame parents except he hasn\'t got \'em\n' +
      '[Aladdin:]      Gotta eat to live, gotta steal to eat\n' +
      '                Tell you all about it when I got the time!\n' +
      '\n' +
      '                One jump ahead of the slowpokes\n' +
      '                One skip ahead of my doom\n' +
      '                Next time gonna use a nom de plume\n' +
      '                One jump ahead of the hitmen\n' +
      '                One hit ahead of the flock\n' +
      '                I think I\'ll take a stroll around the block\n' +
      '\n' +
      '[Crowd:]        Stop, thief! Vandal! Outrage! Scandal!\n' +
      '\n' +
      '[Aladdin:]      Let\'s not be too hasty\n' +
      '[Lady:]         Still I think he\'s rather tasty\n' +
      '[Aladdin:]      Gotta eat to live, gotta steal to eat\n' +
      '                Otherwise we\'d get along\n' +
      '[Crowd:]        Wrong!\n' +
      '\n' +
      '[Aladdin:]      One jump ahead of the hoofbeats\n' +
      '                (Vandal!)\n' +
      '                One hop ahead of the hump\n' +
      '                (Street rat!)\n' +
      '                One trick ahead of disaster\n' +
      '                (Scoundrel!)\n' +
      '                They\'re quick, but I\'m much faster\n' +
      '                (Take that!)\n' +
      '                Here goes, better throw my hand in\n' +
      '                Wish me happy landin\'\n' +
      '                All I gotta do is jump'),
    new Post(4, "Test post #4", "^_^"),
  ],
};

export default {
  state: state,
}
