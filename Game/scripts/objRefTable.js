const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Behaviors.Anchor,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Behaviors.Platform.Exps.MaxSpeed,
		C3.Behaviors.Platform.Acts.SetMaxSpeed,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.SetVar
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{Sólido: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{PlanoDeFundoEmBlocos6: 0},
	{Sprite: 0},
	{Fixar: 0},
	{animação: 0},
	{dtap_direita: 0},
	{dtap_esquerda: 0},
	{correndo: 0},
	{parar_corrida: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{jogador: 0},
	{Teclado: 0},
	{Senóide: 0},
	{ring: 0},
	{Âncora: 0},
	{ringDePontos: 0},
	{coletados: 0},
	{PlanoDeFundoEmBlocos7: 0},
	{PlanoDeFundoEmBlocos8: 0},
	{ação: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{ação2: 0},
	{inimigo: 0},
	{Sprite5: 0},
	{marcador: 0},
	{espinhos: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Texto: 0},
	{Áudio: 0},
	{Sprite10: 0},
	{iniciar: 0},
	{Botão: 0},
	{Sprite11: 0},
	{derrotados: 0},
	{Sprite12: 0},
	{GameOver: 0},
	{pontos: 0},
	{inimigosDerrotados: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos6: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	animação: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	ring: class extends self.ISpriteInstance {},
	ringDePontos: class extends self.ISpriteInstance {},
	coletados: class extends self.ITextInstance {},
	PlanoDeFundoEmBlocos7: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos8: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	inimigo: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	marcador: class extends self.ISpriteInstance {},
	espinhos: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Áudio: class extends self.IInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	iniciar: class extends self.ITextInstance {},
	Botão: class extends self.IButtonInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	derrotados: class extends self.ITextInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	GameOver: class extends self.ITextInstance {}
}