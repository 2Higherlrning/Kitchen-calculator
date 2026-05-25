import { useState } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Pro:wght@300;400;500&display=swap');

  :root {
    --cream: #fdf6ec;
    --parchment: #f5e6c8;
    --warm-brown: #8b5e3c;
    --dark-brown: #3d2314;
    --rust: #c0542a;
    --sage: #6b7c5c;
    --gold: #c9922a;
    --light-sage: #e8ede3;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--cream);
    font-family: 'Crimson Pro', serif;
  }

  .app {
    min-height: 100vh;
    background: var(--cream);
    background-image: 
      radial-gradient(ellipse at 20% 50%, rgba(139,94,60,0.06) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(201,146,42,0.08) 0%, transparent 50%);
    padding: 2rem 1rem 4rem;
  }

  .header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    color: var(--dark-brown);
    letter-spacing: -0.5px;
    line-height: 1.1;
  }

  .header h1 span {
    color: var(--rust);
    font-style: italic;
  }

  .header p {
    color: var(--warm-brown);
    font-size: 1.05rem;
    margin-top: 0.4rem;
    font-weight: 300;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    justify-content: center;
    margin: 0.75rem 0;
  }

  .divider-line {
    width: 60px;
    height: 1px;
    background: var(--gold);
    opacity: 0.6;
  }

  .divider-icon {
    color: var(--gold);
    font-size: 1rem;
  }

  .tabs {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .tab {
    padding: 0.5rem 1.1rem;
    border: 1.5px solid var(--parchment);
    background: white;
    color: var(--warm-brown);
    border-radius: 2rem;
    font-family: 'Crimson Pro', serif;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .tab:hover { border-color: var(--rust); color: var(--rust); }

  .tab.active {
    background: var(--rust);
    border-color: var(--rust);
    color: white;
  }

  .card {
    background: white;
    border: 1px solid var(--parchment);
    border-radius: 16px;
    padding: 1.75rem;
    max-width: 520px;
    margin: 0 auto 1.5rem;
    box-shadow: 0 4px 24px rgba(61,35,20,0.06);
  }

  .card h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    color: var(--dark-brown);
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card h2 .icon { font-size: 1.1rem; }

  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--warm-brown);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.4rem;
  }

  .input-row {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
    align-items: flex-end;
  }

  .input-group {
    flex: 1;
  }

  input[type="number"], select {
    width: 100%;
    padding: 0.65rem 0.9rem;
    border: 1.5px solid var(--parchment);
    border-radius: 8px;
    font-family: 'Crimson Pro', serif;
    font-size: 1.05rem;
    color: var(--dark-brown);
    background: var(--cream);
    transition: border-color 0.2s;
    appearance: none;
  }

  input[type="number"]:focus, select:focus {
    outline: none;
    border-color: var(--rust);
  }

  .btn {
    width: 100%;
    padding: 0.75rem;
    background: var(--rust);
    color: white;
    border: none;
    border-radius: 10px;
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    margin-top: 0.25rem;
  }

  .btn:hover { background: var(--dark-brown); }
  .btn:active { transform: scale(0.98); }

  .result-box {
    margin-top: 1.25rem;
    background: var(--light-sage);
    border: 1px solid rgba(107,124,92,0.3);
    border-radius: 10px;
    padding: 1rem 1.25rem;
  }

  .result-box .result-label {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--sage);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.25rem;
  }

  .result-box .result-value {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: var(--dark-brown);
  }

  .result-box .result-sub {
    font-size: 0.9rem;
    color: var(--warm-brown);
    margin-top: 0.15rem;
  }

  .result-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .result-mini {
    background: var(--cream);
    border: 1px solid var(--parchment);
    border-radius: 8px;
    padding: 0.65rem 0.9rem;
    text-align: center;
  }

  .result-mini .mini-label {
    font-size: 0.75rem;
    color: var(--warm-brown);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .result-mini .mini-value {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: var(--dark-brown);
    margin-top: 0.1rem;
  }

  .temp-toggle {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .temp-btn {
    flex: 1;
    padding: 0.5rem;
    border: 1.5px solid var(--parchment);
    border-radius: 8px;
    background: var(--cream);
    color: var(--warm-brown);
    font-family: 'Crimson Pro', serif;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .temp-btn.active {
    background: var(--sage);
    border-color: var(--sage);
    color: white;
  }

  .servings-display {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem 0 1.25rem;
  }

  .servings-btn {
    width: 36px;
    height: 36px;
    border: 1.5px solid var(--parchment);
    border-radius: 50%;
    background: white;
    color: var(--rust);
    font-size: 1.3rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transition: all 0.2s;
  }

  .servings-btn:hover { background: var(--rust); color: white; border-color: var(--rust); }

  .servings-num {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--dark-brown);
    min-width: 2.5rem;
    text-align: center;
  }

  .ingredient-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr auto;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .ingredient-row input[type="text"] {
    width: 100%;
    padding: 0.6rem 0.75rem;
    border: 1.5px solid var(--parchment);
    border-radius: 8px;
    font-family: 'Crimson Pro', serif;
    font-size: 1rem;
    color: var(--dark-brown);
    background: var(--cream);
  }

  .ingredient-row input[type="text"]:focus {
    outline: none;
    border-color: var(--rust);
  }

  .remove-btn {
    background: none;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 0.3rem;
    transition: color 0.2s;
  }

  .remove-btn:hover { color: var(--rust); }

  .add-btn {
    background: none;
    border: 1.5px dashed var(--parchment);
    color: var(--warm-brown);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-family: 'Crimson Pro', serif;
    font-size: 0.95rem;
    cursor: pointer;
    width: 100%;
    margin: 0.5rem 0 1rem;
    transition: all 0.2s;
  }

  .add-btn:hover { border-color: var(--rust); color: var(--rust); }

  .scaled-list {
    margin-top: 1rem;
    border-top: 1px solid var(--parchment);
    padding-top: 1rem;
  }

  .scaled-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.45rem 0;
    border-bottom: 1px solid rgba(245,230,200,0.5);
    font-size: 1rem;
    color: var(--dark-brown);
  }

  .scaled-item:last-child { border-bottom: none; }

  .scaled-amount {
    font-family: 'Playfair Display', serif;
    color: var(--rust);
    font-size: 1.05rem;
  }

  .timer-display {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    text-align: center;
    color: var(--dark-brown);
    letter-spacing: 2px;
    margin: 1rem 0;
  }

  .timer-display.running { color: var(--rust); }
  .timer-display.done { color: var(--sage); }

  .timer-btns {
    display: flex;
    gap: 0.5rem;
  }

  .timer-btns .btn {
    flex: 1;
    background: var(--warm-brown);
  }

  .timer-btns .btn.primary { background: var(--rust); }
  .timer-btns .btn:hover { background: var(--dark-brown); }
`;

const UNITS = {
  volume: ["tsp", "tbsp", "fl oz", "cup", "pint", "quart", "gallon", "ml", "L"],
  weight: ["oz", "lb", "g", "kg"],
};

const CONVERSIONS_TO_ML = {
  tsp: 4.929, tbsp: 14.787, "fl oz": 29.574, cup: 236.588,
  pint: 473.176, quart: 946.353, gallon: 3785.41, ml: 1, L: 1000,
};

const CONVERSIONS_TO_G = {
  oz: 28.3495, lb: 453.592, g: 1, kg: 1000,
};

function UnitConverter() {
  const [amount, setAmount] = useState("");
  const [fromUnit, setFromUnit] = useState("cup");
  const [toUnit, setToUnit] = useState("ml");
  const [type, setType] = useState("volume");

  const unitList = UNITS[type];
  const convMap = type === "volume" ? CONVERSIONS_TO_ML : CONVERSIONS_TO_G;

  const convert = () => {
    const val = parseFloat(amount);
    if (isNaN(val)) return null;
    const base = val * (convMap[fromUnit] || 1);
    return (base / (convMap[toUnit] || 1)).toFixed(3).replace(/\.?0+$/, "");
  };

  const result = convert();

  return (
    <div className="card">
      <h2><span className="icon">⚖️</span> Unit Converter</h2>
      <div className="temp-toggle">
        <button className={`temp-btn ${type === "volume" ? "active" : ""}`} onClick={() => { setType("volume"); setFromUnit("cup"); setToUnit("ml"); }}>Volume</button>
        <button className={`temp-btn ${type === "weight" ? "active" : ""}`} onClick={() => { setType("weight"); setFromUnit("oz"); setToUnit("g"); }}>Weight</button>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label>Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0" />
        </div>
        <div className="input-group">
          <label>From</label>
          <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
            {unitList.map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
        <div className="input-group">
          <label>To</label>
          <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
            {unitList.map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
      </div>
      {result !== null && (
        <div className="result-box">
          <div className="result-label">Result</div>
          <div className="result-value">{result} {toUnit}</div>
          <div className="result-sub">{amount} {fromUnit} = {result} {toUnit}</div>
        </div>
      )}
    </div>
  );
}

function TempConverter() {
  const [temp, setTemp] = useState("");
  const [dir, setDir] = useState("FtoC");

  const convert = () => {
    const v = parseFloat(temp);
    if (isNaN(v)) return null;
    if (dir === "FtoC") return ((v - 32) * 5 / 9).toFixed(1);
    return (v * 9 / 5 + 32).toFixed(1);
  };

  const MARKS = [
    { f: 32, label: "Water freezes" }, { f: 212, label: "Water boils" },
    { f: 325, label: "Low oven" }, { f: 350, label: "Moderate oven" },
    { f: 375, label: "Medium oven" }, { f: 400, label: "Hot oven" },
    { f: 425, label: "Very hot oven" }, { f: 450, label: "High heat" },
  ];

  const result = convert();

  return (
    <div className="card">
      <h2><span className="icon">🌡️</span> Temperature</h2>
      <div className="temp-toggle">
        <button className={`temp-btn ${dir === "FtoC" ? "active" : ""}`} onClick={() => setDir("FtoC")}>°F → °C</button>
        <button className={`temp-btn ${dir === "CtoF" ? "active" : ""}`} onClick={() => setDir("CtoF")}>°C → °F</button>
      </div>
      <label>{dir === "FtoC" ? "Fahrenheit" : "Celsius"}</label>
      <input type="number" value={temp} onChange={e => setTemp(e.target.value)} placeholder="e.g. 350" style={{ marginBottom: "1rem" }} />
      {result !== null && (
        <div className="result-box">
          <div className="result-label">Result</div>
          <div className="result-value">{result}°{dir === "FtoC" ? "C" : "F"}</div>
        </div>
      )}
      <div className="result-grid" style={{ marginTop: "1rem" }}>
        {MARKS.map(m => (
          <div className="result-mini" key={m.f} style={{ cursor: "pointer" }} onClick={() => { setTemp(dir === "FtoC" ? m.f : ((m.f - 32) * 5 / 9).toFixed(0)); }}>
            <div className="mini-label">{m.label}</div>
            <div className="mini-value">{m.f}°F</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecipeScaler() {
  const [origServings, setOrigServings] = useState(4);
  const [newServings, setNewServings] = useState(4);
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "Flour", amount: "2", unit: "cup" },
    { id: 2, name: "Sugar", amount: "0.5", unit: "cup" },
    { id: 3, name: "Butter", amount: "4", unit: "tbsp" },
  ]);

  const nextId = () => Math.max(...ingredients.map(i => i.id)) + 1;

  const update = (id, field, val) => setIngredients(ingredients.map(i => i.id === id ? { ...i, [field]: val } : i));
  const remove = (id) => setIngredients(ingredients.filter(i => i.id !== id));
  const add = () => setIngredients([...ingredients, { id: nextId(), name: "", amount: "", unit: "cup" }]);

  const ratio = newServings / origServings;

  const formatAmt = (amt) => {
    const n = parseFloat(amt) * ratio;
    if (isNaN(n)) return "—";
    const frac = n % 1;
    const whole = Math.floor(n);
    const fracs = [[1, 4], [1, 3], [1, 2], [2, 3], [3, 4]];
    for (let [num, den] of fracs) {
      if (Math.abs(frac - num / den) < 0.05) {
        return whole ? `${whole} ${num}⁄${den}` : `${num}⁄${den}`;
      }
    }
    return n % 1 === 0 ? n : n.toFixed(2).replace(/\.?0+$/, "");
  };

  const allUnits = [...UNITS.volume, ...UNITS.weight, "piece", "pinch", "dash"];

  return (
    <div className="card">
      <h2><span className="icon">📖</span> Recipe Scaler</h2>
      <div style={{ display: "flex", gap: "2rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
        <div>
          <label>Original Servings</label>
          <div className="servings-display">
            <button className="servings-btn" onClick={() => setOrigServings(Math.max(1, origServings - 1))}>−</button>
            <div className="servings-num">{origServings}</div>
            <button className="servings-btn" onClick={() => setOrigServings(origServings + 1)}>+</button>
          </div>
        </div>
        <div>
          <label>New Servings</label>
          <div className="servings-display">
            <button className="servings-btn" onClick={() => setNewServings(Math.max(1, newServings - 1))}>−</button>
            <div className="servings-num">{newServings}</div>
            <button className="servings-btn" onClick={() => setNewServings(newServings + 1)}>+</button>
          </div>
        </div>
      </div>

      <label>Ingredients</label>
      <div style={{ marginBottom: "0.25rem", display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "0.5rem" }}>
        {["Name", "Amount", "Unit", ""].map(h => <span key={h} style={{ fontSize: "0.75rem", color: "var(--warm-brown)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</span>)}
      </div>
      {ingredients.map(ing => (
        <div className="ingredient-row" key={ing.id}>
          <input type="text" value={ing.name} onChange={e => update(ing.id, "name", e.target.value)} placeholder="Ingredient" />
          <input type="number" value={ing.amount} onChange={e => update(ing.id, "amount", e.target.value)} placeholder="0" />
          <select value={ing.unit} onChange={e => update(ing.id, "unit", e.target.value)}>
            {allUnits.map(u => <option key={u}>{u}</option>)}
          </select>
          <button className="remove-btn" onClick={() => remove(ing.id)}>✕</button>
        </div>
      ))}
      <button className="add-btn" onClick={add}>+ Add ingredient</button>

      {ratio !== 1 && (
        <div className="scaled-list">
          <div style={{ fontSize: "0.85rem", color: "var(--warm-brown)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            Scaled for {newServings} servings ({ratio > 1 ? "+" : ""}{Math.round((ratio - 1) * 100)}%)
          </div>
          {ingredients.filter(i => i.name).map(ing => (
            <div className="scaled-item" key={ing.id}>
              <span>{ing.name}</span>
              <span className="scaled-amount">{formatAmt(ing.amount)} {ing.unit}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Timer() {
  const [minutes, setMinutes] = useState("5");
  const [seconds, setSeconds] = useState("0");
  const [remaining, setRemaining] = useState(null);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const totalSecs = () => parseInt(minutes || 0) * 60 + parseInt(seconds || 0);

  const start = () => {
    if (remaining === null) {
      const t = totalSecs();
      if (t <= 0) return;
      setRemaining(t);
      tick(t);
    } else {
      tick(remaining);
    }
    setRunning(true);
    setDone(false);
  };

  const tick = (startVal) => {
    let cur = startVal;
    const id = setInterval(() => {
      cur -= 1;
      if (cur <= 0) {
        clearInterval(id);
        setRemaining(0);
        setRunning(false);
        setDone(true);
      } else {
        setRemaining(cur);
      }
    }, 1000);
    setIntervalId(id);
  };

  const pause = () => {
    clearInterval(intervalId);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(intervalId);
    setRemaining(null);
    setRunning(false);
    setDone(false);
  };

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const displayVal = remaining !== null ? fmt(remaining) : `${String(parseInt(minutes || 0)).padStart(2, "0")}:${String(parseInt(seconds || 0)).padStart(2, "0")}`;

  return (
    <div className="card">
      <h2><span className="icon">⏱️</span> Kitchen Timer</h2>
      {remaining === null && (
        <div className="input-row">
          <div className="input-group">
            <label>Minutes</label>
            <input type="number" value={minutes} min="0" max="999" onChange={e => setMinutes(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Seconds</label>
            <input type="number" value={seconds} min="0" max="59" onChange={e => setSeconds(e.target.value)} />
          </div>
        </div>
      )}
      <div className={`timer-display ${running ? "running" : ""} ${done ? "done" : ""}`}>
        {done ? "✓ Done!" : displayVal}
      </div>
      <div className="timer-btns">
        {!running ? (
          <button className="btn primary" onClick={start}>{remaining !== null && !done ? "Resume" : "Start"}</button>
        ) : (
          <button className="btn" onClick={pause}>Pause</button>
        )}
        <button className="btn" onClick={reset} style={{ background: "var(--parchment)", color: "var(--dark-brown)" }}>Reset</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <label>Quick set</label>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.4rem" }}>
          {[1, 3, 5, 10, 15, 20, 30, 45, 60].map(m => (
            <button key={m} style={{ padding: "0.35rem 0.75rem", border: "1.5px solid var(--parchment)", borderRadius: "20px", background: "var(--cream)", color: "var(--warm-brown)", cursor: "pointer", fontFamily: "'Crimson Pro', serif", fontSize: "0.9rem" }}
              onClick={() => { reset(); setMinutes(String(m)); setSeconds("0"); }}>
              {m}m
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { id: "convert", label: "Unit Convert" },
  { id: "temp", label: "Temperature" },
  { id: "scale", label: "Recipe Scaler" },
  { id: "timer", label: "Timer" },
];

export default function App() {
  const [tab, setTab] = useState("convert");

  return (
    <>
      <style>{style}</style>
      <div className="app">
        <div className="header">
          <h1>Kitchen <span>Calculator</span></h1>
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-icon">✦</span>
            <div className="divider-line" />
          </div>
          <p>Your sous chef for every measurement</p>
        </div>

        <div className="tabs">
          {TABS.map(t => (
            <button key={t.id} className={`tab ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "convert" && <UnitConverter />}
        {tab === "temp" && <TempConverter />}
        {tab === "scale" && <RecipeScaler />}
        {tab === "timer" && <Timer />}
      </div>
    </>
  );
}
