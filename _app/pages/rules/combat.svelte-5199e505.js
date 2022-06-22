import{S as Mr,i as Fr,s as qr,e as s,t as a,k as h,c as i,a as r,h as n,d as t,m as c,g as d,I as e,n as ii}from"../../chunks/index-bd8f1dbb.js";function jr(Cr){let P,ga,Kt,L,ka,Ae,ya,Ea,Nt,G,_a,Qt,U,wa,Xt,v,C,Se,Ta,Ia,De,Aa,Sa,Da,J,xe,xa,Ba,Pa,M,Be,La,Ca,Pe,Ma,Fa,qa,K,Le,ja,Va,Wa,F,Ce,Ha,Oa,Me,Za,Ra,za,N,Fe,Ga,Ua,Yt,Q,Ja,$t,u,Ka,qe,Na,Qa,je,Xa,Ya,Ve,$a,en,We,tn,an,He,nn,on,Oe,sn,rn,ea,f,ln,Ze,hn,cn,Re,dn,fn,ze,bn,un,Ge,mn,pn,Ue,vn,gn,Je,kn,yn,Ke,En,_n,ta,X,wn,aa,m,Y,Ne,Tn,In,An,$,Qe,Sn,Dn,xn,ee,Xe,Bn,Pn,Ln,te,Ye,Cn,Mn,Fn,ae,$e,qn,jn,Vn,ne,et,Wn,Hn,On,oe,tt,Zn,Rn,na,se,zn,oa,S,ie,at,Gn,Un,Jn,re,nt,Kn,Nn,Qn,le,ot,Xn,Yn,sa,he,$n,ia,ce,eo,ra,de,to,la,fe,ao,ha,be,no,ca,T,ue,st,oo,so,io,me,it,ro,lo,ho,pe,rt,co,fo,bo,q,lt,uo,mo,ht,po,vo,da,I,go,ct,ko,yo,dt,Eo,_o,ft,wo,To,fa,b,Io,bt,Ao,So,ut,Do,xo,mt,Bo,Po,pt,Lo,Co,vt,Mo,Fo,gt,qo,jo,kt,Vo,Wo,ba,ve,Ho,ua,y,ge,yt,Oo,Zo,Ro,ke,Et,zo,Go,Uo,ye,_t,Jo,Ko,No,Ee,wt,Qo,Xo,Yo,_e,Tt,$o,es,ma,we,ts,pa,p,j,It,as,ns,At,os,ss,is,D,St,rs,ls,Dt,hs,cs,xt,ds,fs,bs,V,Bt,us,ms,Pt,ps,vs,gs,W,Lt,ks,ys,Ct,Es,_s,ws,Te,Mt,Ts,Is,As,H,Ft,Ss,Ds,qt,xs,Bs,Ps,x,jt,Ls,Cs,Vt,Ms,Fs,Wt,qs,js;return{c(){P=s("h1"),ga=a("Combat"),Kt=h(),L=s("p"),ka=a(`When combatants in the game use violence to solve their problems, combat ensues.
  Each combat encounter is played out on a `),Ae=s("i"),ya=a("battleground"),Ea=a(`, represented by a hex grid.
  Each side in combat is given a turn in which each combatant on that side takes actions.`),Nt=h(),G=s("h3"),_a=a("Combatants and Stats"),Qt=h(),U=s("p"),wa=a(`Every participant in a fight is a combatant, but not all combatants are created
  equal. Characters, controlled by players, have more complex actions and two additional
  resources to manage: Focus and Energy. Combatants have the following 6 stats,
  the first four of which are also posessed by the Adversaries controlled by the
  Game Master:`),Xt=h(),v=s("ul"),C=s("li"),Se=s("b"),Ta=a("Speed"),Ia=a(" grants is a resource a combatant spends to define their "),De=s("i"),Aa=a(`Path
    of Movement`),Sa=a(`. Each turn the combatant's speed is restored to their Speed
    stat value.`),Da=h(),J=s("li"),xe=s("b"),xa=a("Evasion"),Ba=a(` helps a combatant resist attacks. When an attack roll is made,
    the hit die must be greater than Evasion to count.`),Pa=h(),M=s("li"),Be=s("b"),La=a("Defense"),Ca=a(` also helps a combatant resist attacks. After seeing if the hit
    dice are counted, the attack value is calculated. If it's greater than the
    combatant's Defense, the target's defenses are `),Pe=s("i"),Ma=a("Broken"),Fa=a("."),qa=h(),K=s("li"),Le=s("b"),ja=a("Resilience"),Va=a(` measures how hard it is to finish off a combatant. Each
    combatant gets Defense Tokens equal to their Resilience. When a target's defenses
    are broken, these tokens are discarded. Other, lesser hits, may tap these
    defense tokens, allowing them to be regenerated later.`),Wa=h(),F=s("li"),Ce=s("b"),Ha=a("Energy"),Oa=a(` is a resource that a combatant spends for powerful actions.
    Energy can also be used to `),Me=s("i"),Za=a("Double Down"),Ra=a(` on actions. When initiative is
    rolled, the combatant's Energy is restored to their Energy stat value.`),za=h(),N=s("li"),Fe=s("b"),Ga=a("Focus"),Ua=a(` is a resource that a combatant spends in a variety of ways to
    enhance what they're trying to do. Each turn the combatant's Focus is restored
    to their Focus stat value. Focus can be used to maintain actions at the beginning
    of the combatant's turn, noted as a focus cost on the action if the action can
    be maintained. Unused focus can be spent to increase a combatant's defense against
    a single attack, one point of defense per Focus spent, reroll a hit die on one
    of their attacks per focus spent, gain an extra Speed, or traverse Challenging
    Terrain.`),Yt=h(),Q=s("h3"),Ja=a("Movement and Terrain"),$t=h(),u=s("p"),Ka=a("In Dragonsteel, unlike many other Tabletop Role Playing Games, the "),qe=s("i"),Na=a("battleground"),Qa=a(`
  is intended to be a conceptual `),je=s("i"),Xa=a("battleground"),Ya=a(` rather than representing the exact
  terrain the sides fight over. The `),Ve=s("i"),$a=a("battleground"),en=a(` is laid out on a hexagonal grid
  such that adjacent hexes run in vertical columns. The `),We=s("i"),tn=a("battleground"),an=a(` is split into
  two sides with a no-man's land in between. The `),He=s("i"),nn=a("battleground"),on=a(` is symmetrical around
  the no-man's land which is made of a single column of 6 hexes. Each side has 5,
  then 4, then 3, then 2 hexes in the columns going out from the central no-man's land.
  Each combatant involved in combat remains on one side of the `),Oe=s("i"),sn=a("battleground"),rn=a("."),ea=h(),f=s("p"),ln=a(`Regardless of what actions a combatant performs, a combatant gains Speed
  equal to their Speed stat at the start of their turn. Focus points can be converted
  into Speed as well. Move actions (discussed later) only augment movement.
  Each turn, the combatant defines a `),Ze=s("i"),hn=a("Path of Movement"),cn=a(` that uses some or all
  of their Speed. The `),Re=s("i"),dn=a("Path of Movement"),fn=a(` (frequently referred to as
  simply the "`),ze=s("i"),bn=a("Path"),un=a(`") determines what targets a combatant can apply their
  actions to (See the section on `),Ge=s("i"),mn=a("Patterns"),pn=a(`). Once a combatant resolves their
  actions, they return to where they started or ended, provided the space is on
  their side of the `),Ue=s("i"),vn=a("battleground"),gn=a(`. This usually means that combatants have a fixed
  place on the `),Je=s("i"),kn=a("battleground"),yn=a(" somewhere on their side, even though their "),Ke=s("i"),En=a("Path"),_n=a(`
  may cross into the enemy's side.`),ta=h(),X=s("p"),wn=a(`Movement is complicated by terrain types. While a basic terrain has no special
  effects and costs just 1 Speed to enter, there are various specialized
  terrain types that a combatant may encounter. GMs should feel free to create
  additional, specialized terrain types as long as players understand the rules
  of those terrain types at the start of the combat.`),aa=h(),m=s("ul"),Y=s("li"),Ne=s("b"),Tn=a("Difficult Terrain "),In=a("costs an extra Speed to enter."),An=h(),$=s("li"),Qe=s("b"),Sn=a("Challenging Terrain "),Dn=a("costs 1 focus or 2 extra Speed to move through."),xn=h(),ee=s("li"),Xe=s("b"),Bn=a("Barrier Terrain "),Pn=a("cannot be moved through."),Ln=h(),te=s("li"),Ye=s("b"),Cn=a("Hazardous Terrain "),Mn=a("requires the combatant to tap or discard a defense token."),Fn=h(),ae=s("li"),$e=s("b"),qn=a("Obscuring Terrain "),jn=a("reduces the attack value of any attack roll made by 1."),Vn=h(),ne=s("li"),et=s("b"),Wn=a("Elevated Terrain "),Hn=a(`costs 2 Speed to enter unless entering the
    space from a higher elevation. Elevation changes more than 2 levels cause the
    adjacent spaces to not be considered adjacent by other rules like attack patterns
    and Zone of Control.`),On=h(),oe=s("li"),tt=s("b"),Zn=a("Zone of Control "),Rn=a(`is exerted by each combatant on the space they occupy as
    well as the spaces adjacent to them. Each space in the Zone of Control costs
    an extra Speed for enemies to enter. Zones of Control from multiple
    combatants overlap their effect. Many actions add additional effects to Zone of
    Control.`),na=h(),se=s("p"),zn=a(`Move actions and passives allow certain combatants to ignore terrain types.
  Specific actions may give specific benefits, but some movement types are
  common enough to be named and defined:`),oa=h(),S=s("ul"),ie=s("li"),at=s("b"),Gn=a("Flight "),Un=a(`allows combatants to ignore other combatants' Zone of Control
    unless those combatants also have flight. Flight ignores Difficult Terrain,
    Elevated Terrain and Challenging Terrain.`),Jn=h(),re=s("li"),nt=s("b"),Kn=a("Climbing "),Nn=a(`allows combatants to treat Elevated terrain of higher levels
    as difficult terrain instead of Elevated terrain.`),Qn=h(),le=s("li"),ot=s("b"),Xn=a("Teleportation "),Yn=a(`is expressed in a number of spaces that a combatant may skip
    during their movement. Spaces that are skipped are removed from the Path
    of Movement. Teleportation cannot skip Barriers. It cannot skip Obscuring
    terrain, but it can bypass Liquid Terrain. It ignores all other Terrain
    types. It costs 1 Speed to enter the space on the other side
    of the teleport, regardless of the type of terrain entered. Multiple
    teleportation points can be used simultaneously to skip several spaces
    or broken up to skip multiple times in any combination of spaces that
    adds up to the number of teleportation points.`),sa=h(),he=s("h3"),$n=a("Turns and Actions"),ia=h(),ce=s("p"),eo=a(`During combat, each side takes turns going. Each creature
  on a side takes two actions during their sides' turn in any order -- the
  players can either tactically decide who will go first or allow the player
  that knows what they want to do earliest go first. For each side, the beginning
  of a round of combat starts with their turn and continues until the enemy
  has completed their turns.`),ra=h(),de=s("p"),to=a(`The side that goes first in combat is decided by a roll off or a coin toss. The
  side that wins the roll off or coin toss decides if they will go first or second.
  The side that goes second places their characters on the battleground first. Then
  the side that goes first places their characters. The side that goes first only
  takes one action on their first turn. Then the second side takes a full turn and
  the two sides alternate taking full turns after that.`),la=h(),fe=s("p"),ao=a(`At the beginning of each side's turn, the combatants perform upkeep actions,
  most of which are covered by the rules about effects. This is also when combatants
  regenerate Speed and Focus. All combatants in a group should complete
  this before resolving each combatant's turn, but for efficiency whoever completes
  their resolutions first can start taking and planning their actions.`),ha=h(),be=s("p"),no=a(`Each combatant on a team can take two actions. The actions of one combatant
  should be resolved before the actions of another combatant, but the effects of
  the actions of a each combatant can be resolved in whatever order the combatant
  prefers. The two actions must be of different types:`),ca=h(),T=s("ul"),ue=s("li"),st=s("b"),oo=a("Attack"),so=a(" actions are intended to harm the enemy and take them out of the fight."),io=h(),me=s("li"),it=s("b"),ro=a("Tactics"),lo=a(` actions are intended to reduce the effectiveness of enemies,
    increase the effectiveness of the combatant or their allies, or manipulate the
    battlefield. They may also involve attacks against the enemy, although those
    attacks rarely break the defenses of the target.`),ho=h(),pe=s("li"),rt=s("b"),co=a("Guard"),fo=a(` actions are intended to protect the combatant or their allies,
    heal them, or improve their zone of control.`),bo=h(),q=s("li"),lt=s("b"),uo=a("Move"),mo=a(` actions are intended to enhance the movement of a combatant. A
    combatant does not have to take a move action to move! A character may (should)
    define a `),ht=s("i"),po=a("Path of Movement"),vo=a(" no matter what."),da=h(),I=s("p"),go=a("In addition to the two actions, a combatant may "),ct=s("i"),ko=a("Double Down"),yo=a(` on an action.
  To `),dt=s("i"),Eo=a("Double Down"),_o=a(` a combatant must spend an Energy or a Vigor token. The
  action must be of the same type as one of the other actions taken in the same
  round. The action may not be the exact same action unless that action is
  `),ft=s("i"),wo=a("Repeatable"),To=a("."),fa=h(),b=s("p"),Io=a(`Attack and Tactics actions may include an attack. Attacks are expressed as a dice
  equation like 2d*3+4. To resolve this attack, two 12-sided dice (d12s), called
  hit dice will be rolled and compared to the target's `),bt=s("i"),Ao=a("Evasion"),So=a(`. Each hit
  die that is greater than the target's Evasion will count as 1 and be multiplied
  as shown in the equation. After the dice and multipliers are resolved, any
  other bonuses are added. The total is called the Attack Value. In the example
  equation, if one die is greater than the evasion, the Attack Value would be 7 -
  the possible values would be 4, 7, or 10. Some powers and the Weak effect may
  alter the Attack Value further. The Attack Value is then compared
  against the target's `),ut=s("i"),Do=a("Defense"),xo=a(`. If it's greater, then the target's defense
  is `),mt=s("i"),Bo=a("Broken"),Po=a(" and the target must discard a "),pt=s("i"),Lo=a("Defense Token"),Co=a(`. If not,
  then the number is compared to the number of Aegis tokens the target has. If
  the Attack Value is greater than the number of Aegis tokens, then the target's
  defenses are `),vt=s("i"),Mo=a("Exposed"),Fo=a(" and the target must tap a "),gt=s("i"),qo=a("Defense Token"),jo=a(` or
  - if they have no untapped defense tokens - discard a tapped `),kt=s("i"),Vo=a("Defense Token"),Wo=a(`.
  Actions that have an attack included frequently also indicate what happens to
  targets whose defenses are Exposed or Broken.`),ba=h(),ve=s("p"),Ho=a("Actions also indicate their targets. Actions use one of the following patterns:"),ua=h(),y=s("ul"),ge=s("li"),yt=s("b"),Oo=a("Single, Double, or Triple"),Zo=a(` means the target can be any one,
    two, or three combatants or spaces on or adjacent to the Path of the combatant
    taking the action.`),Ro=h(),ke=s("li"),Et=s("b"),zo=a("Line"),Go=a(` means the targets are all combatants
    along a contiguous line of hexes that intersects the Path of the combatant
    taking the action.`),Uo=h(),ye=s("li"),_t=s("b"),Jo=a("Burst"),Ko=a(` means the targets are all combatants inside three spaces that are
    all adjacent to each other. One space must be on or adjacent to the Path
    of the combatant taking the action.`),No=h(),Ee=s("li"),wt=s("b"),Qo=a("Blast"),Xo=a(` means the targets are all combatants in one central space and all spaces
    adjacent to that central space. One space must be on or adjacent to the Path
    of the combatant taking the action.`),Yo=h(),_e=s("li"),Tt=s("b"),$o=a("Path"),es=a(` means the targets are all combatants along the Path of the combatant
    taking the action.`),ma=h(),we=s("p"),ts=a(`Targets of powers frequently have effects applied to them. Effects are all tracked
  by tokens given to a target. If tokens are inconvenient, counter boxes may be
  used to track virtual tokens. Some tokens are positive and some are negative.`),pa=h(),p=s("ul"),j=s("li"),It=s("b"),as=a("Weak"),ns=a(" tokens reduce the combatant's "),At=s("i"),os=a("Attack Value"),ss=a(` by 1 for each token.
    The combatant discards a Weak token each time they use an action that would
    roll Hit dice.`),is=h(),D=s("li"),St=s("b"),rs=a("Slow"),ls=a(" tokens reduce the amount of "),Dt=s("i"),hs=a("Speed"),cs=a(" and "),xt=s("i"),ds=a("Focus"),fs=a(`
    a target gets at the beginning of each turn. The combatant discards a Slow
    token at the beginning of each turn.`),bs=h(),V=s("li"),Bt=s("b"),us=a("Harm"),ms=a(" tokens cause a target to tap a "),Pt=s("i"),ps=a("Defense Token"),vs=a(` at the
    beginning of each turn. The target discards all Harm tokens after doing so.`),gs=h(),W=s("li"),Lt=s("b"),ks=a("Stun"),ys=a(` tokens cause a target to only be able to take one action on their
    turn. They then discard a token. The target may still `),Ct=s("i"),Es=a("Double Down"),_s=a(" on that action."),ws=h(),Te=s("li"),Mt=s("b"),Ts=a("Hero"),Is=a(` tokens may be discarded with any other token the combatant has
    at the beginning of their turn before the other effects of that token are applied.`),As=h(),H=s("li"),Ft=s("b"),Ss=a("Vigor"),Ds=a(" tokens may be spent in place of energy to "),qt=s("i"),xs=a("Double Down"),Bs=a(`
    on an action.`),Ps=h(),x=s("li"),jt=s("b"),Ls=a("Aegis"),Cs=a(` tokens reduce the effectiveness of incoming attacks as explained
    in the section about resolving attacks. At the beginning of a combatant's turn, an Aegis
    token must be discarded for each `),Vt=s("i"),Ms=a("Defense token"),Fs=a(` that is tapped. For each
    Aegis token discarded like this, a `),Wt=s("i"),qs=a("Defense token"),js=a(" is untapped.")},l(o){P=i(o,"H1",{});var l=r(P);ga=n(l,"Combat"),l.forEach(t),Kt=c(o),L=i(o,"P",{});var va=r(L);ka=n(va,`When combatants in the game use violence to solve their problems, combat ensues.
  Each combat encounter is played out on a `),Ae=i(va,"I",{});var ri=r(Ae);ya=n(ri,"battleground"),ri.forEach(t),Ea=n(va,`, represented by a hex grid.
  Each side in combat is given a turn in which each combatant on that side takes actions.`),va.forEach(t),Nt=c(o),G=i(o,"H3",{});var li=r(G);_a=n(li,"Combatants and Stats"),li.forEach(t),Qt=c(o),U=i(o,"P",{});var hi=r(U);wa=n(hi,`Every participant in a fight is a combatant, but not all combatants are created
  equal. Characters, controlled by players, have more complex actions and two additional
  resources to manage: Focus and Energy. Combatants have the following 6 stats,
  the first four of which are also posessed by the Adversaries controlled by the
  Game Master:`),hi.forEach(t),Xt=c(o),v=i(o,"UL",{});var A=r(v);C=i(A,"LI",{});var Ht=r(C);Se=i(Ht,"B",{});var ci=r(Se);Ta=n(ci,"Speed"),ci.forEach(t),Ia=n(Ht," grants is a resource a combatant spends to define their "),De=i(Ht,"I",{});var di=r(De);Aa=n(di,`Path
    of Movement`),di.forEach(t),Sa=n(Ht,`. Each turn the combatant's speed is restored to their Speed
    stat value.`),Ht.forEach(t),Da=c(A),J=i(A,"LI",{});var Vs=r(J);xe=i(Vs,"B",{});var fi=r(xe);xa=n(fi,"Evasion"),fi.forEach(t),Ba=n(Vs,` helps a combatant resist attacks. When an attack roll is made,
    the hit die must be greater than Evasion to count.`),Vs.forEach(t),Pa=c(A),M=i(A,"LI",{});var Ot=r(M);Be=i(Ot,"B",{});var bi=r(Be);La=n(bi,"Defense"),bi.forEach(t),Ca=n(Ot,` also helps a combatant resist attacks. After seeing if the hit
    dice are counted, the attack value is calculated. If it's greater than the
    combatant's Defense, the target's defenses are `),Pe=i(Ot,"I",{});var ui=r(Pe);Ma=n(ui,"Broken"),ui.forEach(t),Fa=n(Ot,"."),Ot.forEach(t),qa=c(A),K=i(A,"LI",{});var Ws=r(K);Le=i(Ws,"B",{});var mi=r(Le);ja=n(mi,"Resilience"),mi.forEach(t),Va=n(Ws,` measures how hard it is to finish off a combatant. Each
    combatant gets Defense Tokens equal to their Resilience. When a target's defenses
    are broken, these tokens are discarded. Other, lesser hits, may tap these
    defense tokens, allowing them to be regenerated later.`),Ws.forEach(t),Wa=c(A),F=i(A,"LI",{});var Zt=r(F);Ce=i(Zt,"B",{});var pi=r(Ce);Ha=n(pi,"Energy"),pi.forEach(t),Oa=n(Zt,` is a resource that a combatant spends for powerful actions.
    Energy can also be used to `),Me=i(Zt,"I",{});var vi=r(Me);Za=n(vi,"Double Down"),vi.forEach(t),Ra=n(Zt,` on actions. When initiative is
    rolled, the combatant's Energy is restored to their Energy stat value.`),Zt.forEach(t),za=c(A),N=i(A,"LI",{});var Hs=r(N);Fe=i(Hs,"B",{});var gi=r(Fe);Ga=n(gi,"Focus"),gi.forEach(t),Ua=n(Hs,` is a resource that a combatant spends in a variety of ways to
    enhance what they're trying to do. Each turn the combatant's Focus is restored
    to their Focus stat value. Focus can be used to maintain actions at the beginning
    of the combatant's turn, noted as a focus cost on the action if the action can
    be maintained. Unused focus can be spent to increase a combatant's defense against
    a single attack, one point of defense per Focus spent, reroll a hit die on one
    of their attacks per focus spent, gain an extra Speed, or traverse Challenging
    Terrain.`),Hs.forEach(t),A.forEach(t),Yt=c(o),Q=i(o,"H3",{});var ki=r(Q);Ja=n(ki,"Movement and Terrain"),ki.forEach(t),$t=c(o),u=i(o,"P",{});var E=r(u);Ka=n(E,"In Dragonsteel, unlike many other Tabletop Role Playing Games, the "),qe=i(E,"I",{});var yi=r(qe);Na=n(yi,"battleground"),yi.forEach(t),Qa=n(E,`
  is intended to be a conceptual `),je=i(E,"I",{});var Ei=r(je);Xa=n(Ei,"battleground"),Ei.forEach(t),Ya=n(E,` rather than representing the exact
  terrain the sides fight over. The `),Ve=i(E,"I",{});var _i=r(Ve);$a=n(_i,"battleground"),_i.forEach(t),en=n(E,` is laid out on a hexagonal grid
  such that adjacent hexes run in vertical columns. The `),We=i(E,"I",{});var wi=r(We);tn=n(wi,"battleground"),wi.forEach(t),an=n(E,` is split into
  two sides with a no-man's land in between. The `),He=i(E,"I",{});var Ti=r(He);nn=n(Ti,"battleground"),Ti.forEach(t),on=n(E,` is symmetrical around
  the no-man's land which is made of a single column of 6 hexes. Each side has 5,
  then 4, then 3, then 2 hexes in the columns going out from the central no-man's land.
  Each combatant involved in combat remains on one side of the `),Oe=i(E,"I",{});var Ii=r(Oe);sn=n(Ii,"battleground"),Ii.forEach(t),rn=n(E,"."),E.forEach(t),ea=c(o),f=i(o,"P",{});var g=r(f);ln=n(g,`Regardless of what actions a combatant performs, a combatant gains Speed
  equal to their Speed stat at the start of their turn. Focus points can be converted
  into Speed as well. Move actions (discussed later) only augment movement.
  Each turn, the combatant defines a `),Ze=i(g,"I",{});var Ai=r(Ze);hn=n(Ai,"Path of Movement"),Ai.forEach(t),cn=n(g,` that uses some or all
  of their Speed. The `),Re=i(g,"I",{});var Si=r(Re);dn=n(Si,"Path of Movement"),Si.forEach(t),fn=n(g,` (frequently referred to as
  simply the "`),ze=i(g,"I",{});var Di=r(ze);bn=n(Di,"Path"),Di.forEach(t),un=n(g,`") determines what targets a combatant can apply their
  actions to (See the section on `),Ge=i(g,"I",{});var xi=r(Ge);mn=n(xi,"Patterns"),xi.forEach(t),pn=n(g,`). Once a combatant resolves their
  actions, they return to where they started or ended, provided the space is on
  their side of the `),Ue=i(g,"I",{});var Bi=r(Ue);vn=n(Bi,"battleground"),Bi.forEach(t),gn=n(g,`. This usually means that combatants have a fixed
  place on the `),Je=i(g,"I",{});var Pi=r(Je);kn=n(Pi,"battleground"),Pi.forEach(t),yn=n(g," somewhere on their side, even though their "),Ke=i(g,"I",{});var Li=r(Ke);En=n(Li,"Path"),Li.forEach(t),_n=n(g,`
  may cross into the enemy's side.`),g.forEach(t),ta=c(o),X=i(o,"P",{});var Ci=r(X);wn=n(Ci,`Movement is complicated by terrain types. While a basic terrain has no special
  effects and costs just 1 Speed to enter, there are various specialized
  terrain types that a combatant may encounter. GMs should feel free to create
  additional, specialized terrain types as long as players understand the rules
  of those terrain types at the start of the combat.`),Ci.forEach(t),aa=c(o),m=i(o,"UL",{});var _=r(m);Y=i(_,"LI",{});var Os=r(Y);Ne=i(Os,"B",{});var Mi=r(Ne);Tn=n(Mi,"Difficult Terrain "),Mi.forEach(t),In=n(Os,"costs an extra Speed to enter."),Os.forEach(t),An=c(_),$=i(_,"LI",{});var Zs=r($);Qe=i(Zs,"B",{});var Fi=r(Qe);Sn=n(Fi,"Challenging Terrain "),Fi.forEach(t),Dn=n(Zs,"costs 1 focus or 2 extra Speed to move through."),Zs.forEach(t),xn=c(_),ee=i(_,"LI",{});var Rs=r(ee);Xe=i(Rs,"B",{});var qi=r(Xe);Bn=n(qi,"Barrier Terrain "),qi.forEach(t),Pn=n(Rs,"cannot be moved through."),Rs.forEach(t),Ln=c(_),te=i(_,"LI",{});var zs=r(te);Ye=i(zs,"B",{});var ji=r(Ye);Cn=n(ji,"Hazardous Terrain "),ji.forEach(t),Mn=n(zs,"requires the combatant to tap or discard a defense token."),zs.forEach(t),Fn=c(_),ae=i(_,"LI",{});var Gs=r(ae);$e=i(Gs,"B",{});var Vi=r($e);qn=n(Vi,"Obscuring Terrain "),Vi.forEach(t),jn=n(Gs,"reduces the attack value of any attack roll made by 1."),Gs.forEach(t),Vn=c(_),ne=i(_,"LI",{});var Us=r(ne);et=i(Us,"B",{});var Wi=r(et);Wn=n(Wi,"Elevated Terrain "),Wi.forEach(t),Hn=n(Us,`costs 2 Speed to enter unless entering the
    space from a higher elevation. Elevation changes more than 2 levels cause the
    adjacent spaces to not be considered adjacent by other rules like attack patterns
    and Zone of Control.`),Us.forEach(t),On=c(_),oe=i(_,"LI",{});var Js=r(oe);tt=i(Js,"B",{});var Hi=r(tt);Zn=n(Hi,"Zone of Control "),Hi.forEach(t),Rn=n(Js,`is exerted by each combatant on the space they occupy as
    well as the spaces adjacent to them. Each space in the Zone of Control costs
    an extra Speed for enemies to enter. Zones of Control from multiple
    combatants overlap their effect. Many actions add additional effects to Zone of
    Control.`),Js.forEach(t),_.forEach(t),na=c(o),se=i(o,"P",{});var Oi=r(se);zn=n(Oi,`Move actions and passives allow certain combatants to ignore terrain types.
  Specific actions may give specific benefits, but some movement types are
  common enough to be named and defined:`),Oi.forEach(t),oa=c(o),S=i(o,"UL",{});var Ie=r(S);ie=i(Ie,"LI",{});var Ks=r(ie);at=i(Ks,"B",{});var Zi=r(at);Gn=n(Zi,"Flight "),Zi.forEach(t),Un=n(Ks,`allows combatants to ignore other combatants' Zone of Control
    unless those combatants also have flight. Flight ignores Difficult Terrain,
    Elevated Terrain and Challenging Terrain.`),Ks.forEach(t),Jn=c(Ie),re=i(Ie,"LI",{});var Ns=r(re);nt=i(Ns,"B",{});var Ri=r(nt);Kn=n(Ri,"Climbing "),Ri.forEach(t),Nn=n(Ns,`allows combatants to treat Elevated terrain of higher levels
    as difficult terrain instead of Elevated terrain.`),Ns.forEach(t),Qn=c(Ie),le=i(Ie,"LI",{});var Qs=r(le);ot=i(Qs,"B",{});var zi=r(ot);Xn=n(zi,"Teleportation "),zi.forEach(t),Yn=n(Qs,`is expressed in a number of spaces that a combatant may skip
    during their movement. Spaces that are skipped are removed from the Path
    of Movement. Teleportation cannot skip Barriers. It cannot skip Obscuring
    terrain, but it can bypass Liquid Terrain. It ignores all other Terrain
    types. It costs 1 Speed to enter the space on the other side
    of the teleport, regardless of the type of terrain entered. Multiple
    teleportation points can be used simultaneously to skip several spaces
    or broken up to skip multiple times in any combination of spaces that
    adds up to the number of teleportation points.`),Qs.forEach(t),Ie.forEach(t),sa=c(o),he=i(o,"H3",{});var Gi=r(he);$n=n(Gi,"Turns and Actions"),Gi.forEach(t),ia=c(o),ce=i(o,"P",{});var Ui=r(ce);eo=n(Ui,`During combat, each side takes turns going. Each creature
  on a side takes two actions during their sides' turn in any order -- the
  players can either tactically decide who will go first or allow the player
  that knows what they want to do earliest go first. For each side, the beginning
  of a round of combat starts with their turn and continues until the enemy
  has completed their turns.`),Ui.forEach(t),ra=c(o),de=i(o,"P",{});var Ji=r(de);to=n(Ji,`The side that goes first in combat is decided by a roll off or a coin toss. The
  side that wins the roll off or coin toss decides if they will go first or second.
  The side that goes second places their characters on the battleground first. Then
  the side that goes first places their characters. The side that goes first only
  takes one action on their first turn. Then the second side takes a full turn and
  the two sides alternate taking full turns after that.`),Ji.forEach(t),la=c(o),fe=i(o,"P",{});var Ki=r(fe);ao=n(Ki,`At the beginning of each side's turn, the combatants perform upkeep actions,
  most of which are covered by the rules about effects. This is also when combatants
  regenerate Speed and Focus. All combatants in a group should complete
  this before resolving each combatant's turn, but for efficiency whoever completes
  their resolutions first can start taking and planning their actions.`),Ki.forEach(t),ha=c(o),be=i(o,"P",{});var Ni=r(be);no=n(Ni,`Each combatant on a team can take two actions. The actions of one combatant
  should be resolved before the actions of another combatant, but the effects of
  the actions of a each combatant can be resolved in whatever order the combatant
  prefers. The two actions must be of different types:`),Ni.forEach(t),ca=c(o),T=i(o,"UL",{});var O=r(T);ue=i(O,"LI",{});var Xs=r(ue);st=i(Xs,"B",{});var Qi=r(st);oo=n(Qi,"Attack"),Qi.forEach(t),so=n(Xs," actions are intended to harm the enemy and take them out of the fight."),Xs.forEach(t),io=c(O),me=i(O,"LI",{});var Ys=r(me);it=i(Ys,"B",{});var Xi=r(it);ro=n(Xi,"Tactics"),Xi.forEach(t),lo=n(Ys,` actions are intended to reduce the effectiveness of enemies,
    increase the effectiveness of the combatant or their allies, or manipulate the
    battlefield. They may also involve attacks against the enemy, although those
    attacks rarely break the defenses of the target.`),Ys.forEach(t),ho=c(O),pe=i(O,"LI",{});var $s=r(pe);rt=i($s,"B",{});var Yi=r(rt);co=n(Yi,"Guard"),Yi.forEach(t),fo=n($s,` actions are intended to protect the combatant or their allies,
    heal them, or improve their zone of control.`),$s.forEach(t),bo=c(O),q=i(O,"LI",{});var Rt=r(q);lt=i(Rt,"B",{});var $i=r(lt);uo=n($i,"Move"),$i.forEach(t),mo=n(Rt,` actions are intended to enhance the movement of a combatant. A
    combatant does not have to take a move action to move! A character may (should)
    define a `),ht=i(Rt,"I",{});var er=r(ht);po=n(er,"Path of Movement"),er.forEach(t),vo=n(Rt," no matter what."),Rt.forEach(t),O.forEach(t),da=c(o),I=i(o,"P",{});var Z=r(I);go=n(Z,"In addition to the two actions, a combatant may "),ct=i(Z,"I",{});var tr=r(ct);ko=n(tr,"Double Down"),tr.forEach(t),yo=n(Z,` on an action.
  To `),dt=i(Z,"I",{});var ar=r(dt);Eo=n(ar,"Double Down"),ar.forEach(t),_o=n(Z,` a combatant must spend an Energy or a Vigor token. The
  action must be of the same type as one of the other actions taken in the same
  round. The action may not be the exact same action unless that action is
  `),ft=i(Z,"I",{});var nr=r(ft);wo=n(nr,"Repeatable"),nr.forEach(t),To=n(Z,"."),Z.forEach(t),fa=c(o),b=i(o,"P",{});var k=r(b);Io=n(k,`Attack and Tactics actions may include an attack. Attacks are expressed as a dice
  equation like 2d*3+4. To resolve this attack, two 12-sided dice (d12s), called
  hit dice will be rolled and compared to the target's `),bt=i(k,"I",{});var or=r(bt);Ao=n(or,"Evasion"),or.forEach(t),So=n(k,`. Each hit
  die that is greater than the target's Evasion will count as 1 and be multiplied
  as shown in the equation. After the dice and multipliers are resolved, any
  other bonuses are added. The total is called the Attack Value. In the example
  equation, if one die is greater than the evasion, the Attack Value would be 7 -
  the possible values would be 4, 7, or 10. Some powers and the Weak effect may
  alter the Attack Value further. The Attack Value is then compared
  against the target's `),ut=i(k,"I",{});var sr=r(ut);Do=n(sr,"Defense"),sr.forEach(t),xo=n(k,`. If it's greater, then the target's defense
  is `),mt=i(k,"I",{});var ir=r(mt);Bo=n(ir,"Broken"),ir.forEach(t),Po=n(k," and the target must discard a "),pt=i(k,"I",{});var rr=r(pt);Lo=n(rr,"Defense Token"),rr.forEach(t),Co=n(k,`. If not,
  then the number is compared to the number of Aegis tokens the target has. If
  the Attack Value is greater than the number of Aegis tokens, then the target's
  defenses are `),vt=i(k,"I",{});var lr=r(vt);Mo=n(lr,"Exposed"),lr.forEach(t),Fo=n(k," and the target must tap a "),gt=i(k,"I",{});var hr=r(gt);qo=n(hr,"Defense Token"),hr.forEach(t),jo=n(k,` or
  - if they have no untapped defense tokens - discard a tapped `),kt=i(k,"I",{});var cr=r(kt);Vo=n(cr,"Defense Token"),cr.forEach(t),Wo=n(k,`.
  Actions that have an attack included frequently also indicate what happens to
  targets whose defenses are Exposed or Broken.`),k.forEach(t),ba=c(o),ve=i(o,"P",{});var dr=r(ve);Ho=n(dr,"Actions also indicate their targets. Actions use one of the following patterns:"),dr.forEach(t),ua=c(o),y=i(o,"UL",{});var B=r(y);ge=i(B,"LI",{});var ei=r(ge);yt=i(ei,"B",{});var fr=r(yt);Oo=n(fr,"Single, Double, or Triple"),fr.forEach(t),Zo=n(ei,` means the target can be any one,
    two, or three combatants or spaces on or adjacent to the Path of the combatant
    taking the action.`),ei.forEach(t),Ro=c(B),ke=i(B,"LI",{});var ti=r(ke);Et=i(ti,"B",{});var br=r(Et);zo=n(br,"Line"),br.forEach(t),Go=n(ti,` means the targets are all combatants
    along a contiguous line of hexes that intersects the Path of the combatant
    taking the action.`),ti.forEach(t),Uo=c(B),ye=i(B,"LI",{});var ai=r(ye);_t=i(ai,"B",{});var ur=r(_t);Jo=n(ur,"Burst"),ur.forEach(t),Ko=n(ai,` means the targets are all combatants inside three spaces that are
    all adjacent to each other. One space must be on or adjacent to the Path
    of the combatant taking the action.`),ai.forEach(t),No=c(B),Ee=i(B,"LI",{});var ni=r(Ee);wt=i(ni,"B",{});var mr=r(wt);Qo=n(mr,"Blast"),mr.forEach(t),Xo=n(ni,` means the targets are all combatants in one central space and all spaces
    adjacent to that central space. One space must be on or adjacent to the Path
    of the combatant taking the action.`),ni.forEach(t),Yo=c(B),_e=i(B,"LI",{});var oi=r(_e);Tt=i(oi,"B",{});var pr=r(Tt);$o=n(pr,"Path"),pr.forEach(t),es=n(oi,` means the targets are all combatants along the Path of the combatant
    taking the action.`),oi.forEach(t),B.forEach(t),ma=c(o),we=i(o,"P",{});var vr=r(we);ts=n(vr,`Targets of powers frequently have effects applied to them. Effects are all tracked
  by tokens given to a target. If tokens are inconvenient, counter boxes may be
  used to track virtual tokens. Some tokens are positive and some are negative.`),vr.forEach(t),pa=c(o),p=i(o,"UL",{});var w=r(p);j=i(w,"LI",{});var zt=r(j);It=i(zt,"B",{});var gr=r(It);as=n(gr,"Weak"),gr.forEach(t),ns=n(zt," tokens reduce the combatant's "),At=i(zt,"I",{});var kr=r(At);os=n(kr,"Attack Value"),kr.forEach(t),ss=n(zt,` by 1 for each token.
    The combatant discards a Weak token each time they use an action that would
    roll Hit dice.`),zt.forEach(t),is=c(w),D=i(w,"LI",{});var R=r(D);St=i(R,"B",{});var yr=r(St);rs=n(yr,"Slow"),yr.forEach(t),ls=n(R," tokens reduce the amount of "),Dt=i(R,"I",{});var Er=r(Dt);hs=n(Er,"Speed"),Er.forEach(t),cs=n(R," and "),xt=i(R,"I",{});var _r=r(xt);ds=n(_r,"Focus"),_r.forEach(t),fs=n(R,`
    a target gets at the beginning of each turn. The combatant discards a Slow
    token at the beginning of each turn.`),R.forEach(t),bs=c(w),V=i(w,"LI",{});var Gt=r(V);Bt=i(Gt,"B",{});var wr=r(Bt);us=n(wr,"Harm"),wr.forEach(t),ms=n(Gt," tokens cause a target to tap a "),Pt=i(Gt,"I",{});var Tr=r(Pt);ps=n(Tr,"Defense Token"),Tr.forEach(t),vs=n(Gt,` at the
    beginning of each turn. The target discards all Harm tokens after doing so.`),Gt.forEach(t),gs=c(w),W=i(w,"LI",{});var Ut=r(W);Lt=i(Ut,"B",{});var Ir=r(Lt);ks=n(Ir,"Stun"),Ir.forEach(t),ys=n(Ut,` tokens cause a target to only be able to take one action on their
    turn. They then discard a token. The target may still `),Ct=i(Ut,"I",{});var Ar=r(Ct);Es=n(Ar,"Double Down"),Ar.forEach(t),_s=n(Ut," on that action."),Ut.forEach(t),ws=c(w),Te=i(w,"LI",{});var si=r(Te);Mt=i(si,"B",{});var Sr=r(Mt);Ts=n(Sr,"Hero"),Sr.forEach(t),Is=n(si,` tokens may be discarded with any other token the combatant has
    at the beginning of their turn before the other effects of that token are applied.`),si.forEach(t),As=c(w),H=i(w,"LI",{});var Jt=r(H);Ft=i(Jt,"B",{});var Dr=r(Ft);Ss=n(Dr,"Vigor"),Dr.forEach(t),Ds=n(Jt," tokens may be spent in place of energy to "),qt=i(Jt,"I",{});var xr=r(qt);xs=n(xr,"Double Down"),xr.forEach(t),Bs=n(Jt,`
    on an action.`),Jt.forEach(t),Ps=c(w),x=i(w,"LI",{});var z=r(x);jt=i(z,"B",{});var Br=r(jt);Ls=n(Br,"Aegis"),Br.forEach(t),Cs=n(z,` tokens reduce the effectiveness of incoming attacks as explained
    in the section about resolving attacks. At the beginning of a combatant's turn, an Aegis
    token must be discarded for each `),Vt=i(z,"I",{});var Pr=r(Vt);Ms=n(Pr,"Defense token"),Pr.forEach(t),Fs=n(z,` that is tapped. For each
    Aegis token discarded like this, a `),Wt=i(z,"I",{});var Lr=r(Wt);qs=n(Lr,"Defense token"),Lr.forEach(t),js=n(z," is untapped."),z.forEach(t),w.forEach(t)},m(o,l){d(o,P,l),e(P,ga),d(o,Kt,l),d(o,L,l),e(L,ka),e(L,Ae),e(Ae,ya),e(L,Ea),d(o,Nt,l),d(o,G,l),e(G,_a),d(o,Qt,l),d(o,U,l),e(U,wa),d(o,Xt,l),d(o,v,l),e(v,C),e(C,Se),e(Se,Ta),e(C,Ia),e(C,De),e(De,Aa),e(C,Sa),e(v,Da),e(v,J),e(J,xe),e(xe,xa),e(J,Ba),e(v,Pa),e(v,M),e(M,Be),e(Be,La),e(M,Ca),e(M,Pe),e(Pe,Ma),e(M,Fa),e(v,qa),e(v,K),e(K,Le),e(Le,ja),e(K,Va),e(v,Wa),e(v,F),e(F,Ce),e(Ce,Ha),e(F,Oa),e(F,Me),e(Me,Za),e(F,Ra),e(v,za),e(v,N),e(N,Fe),e(Fe,Ga),e(N,Ua),d(o,Yt,l),d(o,Q,l),e(Q,Ja),d(o,$t,l),d(o,u,l),e(u,Ka),e(u,qe),e(qe,Na),e(u,Qa),e(u,je),e(je,Xa),e(u,Ya),e(u,Ve),e(Ve,$a),e(u,en),e(u,We),e(We,tn),e(u,an),e(u,He),e(He,nn),e(u,on),e(u,Oe),e(Oe,sn),e(u,rn),d(o,ea,l),d(o,f,l),e(f,ln),e(f,Ze),e(Ze,hn),e(f,cn),e(f,Re),e(Re,dn),e(f,fn),e(f,ze),e(ze,bn),e(f,un),e(f,Ge),e(Ge,mn),e(f,pn),e(f,Ue),e(Ue,vn),e(f,gn),e(f,Je),e(Je,kn),e(f,yn),e(f,Ke),e(Ke,En),e(f,_n),d(o,ta,l),d(o,X,l),e(X,wn),d(o,aa,l),d(o,m,l),e(m,Y),e(Y,Ne),e(Ne,Tn),e(Y,In),e(m,An),e(m,$),e($,Qe),e(Qe,Sn),e($,Dn),e(m,xn),e(m,ee),e(ee,Xe),e(Xe,Bn),e(ee,Pn),e(m,Ln),e(m,te),e(te,Ye),e(Ye,Cn),e(te,Mn),e(m,Fn),e(m,ae),e(ae,$e),e($e,qn),e(ae,jn),e(m,Vn),e(m,ne),e(ne,et),e(et,Wn),e(ne,Hn),e(m,On),e(m,oe),e(oe,tt),e(tt,Zn),e(oe,Rn),d(o,na,l),d(o,se,l),e(se,zn),d(o,oa,l),d(o,S,l),e(S,ie),e(ie,at),e(at,Gn),e(ie,Un),e(S,Jn),e(S,re),e(re,nt),e(nt,Kn),e(re,Nn),e(S,Qn),e(S,le),e(le,ot),e(ot,Xn),e(le,Yn),d(o,sa,l),d(o,he,l),e(he,$n),d(o,ia,l),d(o,ce,l),e(ce,eo),d(o,ra,l),d(o,de,l),e(de,to),d(o,la,l),d(o,fe,l),e(fe,ao),d(o,ha,l),d(o,be,l),e(be,no),d(o,ca,l),d(o,T,l),e(T,ue),e(ue,st),e(st,oo),e(ue,so),e(T,io),e(T,me),e(me,it),e(it,ro),e(me,lo),e(T,ho),e(T,pe),e(pe,rt),e(rt,co),e(pe,fo),e(T,bo),e(T,q),e(q,lt),e(lt,uo),e(q,mo),e(q,ht),e(ht,po),e(q,vo),d(o,da,l),d(o,I,l),e(I,go),e(I,ct),e(ct,ko),e(I,yo),e(I,dt),e(dt,Eo),e(I,_o),e(I,ft),e(ft,wo),e(I,To),d(o,fa,l),d(o,b,l),e(b,Io),e(b,bt),e(bt,Ao),e(b,So),e(b,ut),e(ut,Do),e(b,xo),e(b,mt),e(mt,Bo),e(b,Po),e(b,pt),e(pt,Lo),e(b,Co),e(b,vt),e(vt,Mo),e(b,Fo),e(b,gt),e(gt,qo),e(b,jo),e(b,kt),e(kt,Vo),e(b,Wo),d(o,ba,l),d(o,ve,l),e(ve,Ho),d(o,ua,l),d(o,y,l),e(y,ge),e(ge,yt),e(yt,Oo),e(ge,Zo),e(y,Ro),e(y,ke),e(ke,Et),e(Et,zo),e(ke,Go),e(y,Uo),e(y,ye),e(ye,_t),e(_t,Jo),e(ye,Ko),e(y,No),e(y,Ee),e(Ee,wt),e(wt,Qo),e(Ee,Xo),e(y,Yo),e(y,_e),e(_e,Tt),e(Tt,$o),e(_e,es),d(o,ma,l),d(o,we,l),e(we,ts),d(o,pa,l),d(o,p,l),e(p,j),e(j,It),e(It,as),e(j,ns),e(j,At),e(At,os),e(j,ss),e(p,is),e(p,D),e(D,St),e(St,rs),e(D,ls),e(D,Dt),e(Dt,hs),e(D,cs),e(D,xt),e(xt,ds),e(D,fs),e(p,bs),e(p,V),e(V,Bt),e(Bt,us),e(V,ms),e(V,Pt),e(Pt,ps),e(V,vs),e(p,gs),e(p,W),e(W,Lt),e(Lt,ks),e(W,ys),e(W,Ct),e(Ct,Es),e(W,_s),e(p,ws),e(p,Te),e(Te,Mt),e(Mt,Ts),e(Te,Is),e(p,As),e(p,H),e(H,Ft),e(Ft,Ss),e(H,Ds),e(H,qt),e(qt,xs),e(H,Bs),e(p,Ps),e(p,x),e(x,jt),e(jt,Ls),e(x,Cs),e(x,Vt),e(Vt,Ms),e(x,Fs),e(x,Wt),e(Wt,qs),e(x,js)},p:ii,i:ii,o:ii,d(o){o&&t(P),o&&t(Kt),o&&t(L),o&&t(Nt),o&&t(G),o&&t(Qt),o&&t(U),o&&t(Xt),o&&t(v),o&&t(Yt),o&&t(Q),o&&t($t),o&&t(u),o&&t(ea),o&&t(f),o&&t(ta),o&&t(X),o&&t(aa),o&&t(m),o&&t(na),o&&t(se),o&&t(oa),o&&t(S),o&&t(sa),o&&t(he),o&&t(ia),o&&t(ce),o&&t(ra),o&&t(de),o&&t(la),o&&t(fe),o&&t(ha),o&&t(be),o&&t(ca),o&&t(T),o&&t(da),o&&t(I),o&&t(fa),o&&t(b),o&&t(ba),o&&t(ve),o&&t(ua),o&&t(y),o&&t(ma),o&&t(we),o&&t(pa),o&&t(p)}}}class Wr extends Mr{constructor(P){super(),Fr(this,P,null,jr,qr,{})}}export{Wr as default};
