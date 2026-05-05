const input = "this is a simple huffman example for transmission compression";


function frequencyMap(text) {
  // Count occurrences for each symbol.
  const map = new Map();
  for (const ch of text) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  return map;
}


function buildTree(freq) {
  // Start from leaf nodes (one per symbol).
  const nodes = Array.from(freq.entries()).map(([ch, count]) => ({ ch, count, left: null, right: null }));

  if (nodes.length === 1) {
    return { ch: null, count: nodes[0].count, left: nodes[0], right: null };
  }

  while (nodes.length > 1) {
    // Greedy step: merge the two least frequent nodes.
    nodes.sort((a, b) => a.count - b.count);
    const left = nodes.shift();
    const right = nodes.shift();
    nodes.push({ ch: null, count: left.count + right.count, left, right });
  }

  return nodes[0];
}


function buildCodes(node, prefix = "", out = {}) {
  // Leaf node: prefix is this symbol's Huffman code.
  if (!node.left && !node.right && node.ch !== null) {
    out[node.ch] = prefix || "0";
    return out;
  }
  // Convention: left = 0, right = 1.
  if (node.left) buildCodes(node.left, prefix + "0", out);
  if (node.right) buildCodes(node.right, prefix + "1", out);
  return out;
}


function encode(text, codeTable) {
  return text
    .split("")
    .map((ch) => codeTable[ch])
    .join("");
}


function decode(bits, tree) {
  // Traverse the tree bit-by-bit until reaching leaves.
  let out = "";
  let node = tree;

  for (const bit of bits) {
    node = bit === "0" ? node.left : node.right;
    if (!node.left && !node.right) {
      out += node.ch;
      node = tree;
    }
  }

  return out;
}


function printTreeLevelByLevel(root)
{
  if (!root) return;

  const queue = [{ node: root, level: 0 }];
  const levels = {};

  while (queue.length > 0)
  {
    const { node, level } = queue.shift();

    if (!levels[level]) levels[level] = [];
    
    const display = node.ch ? `'${node.ch}':${node.count}` : `Node:${node.count}`;
    levels[level].push(display);

    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  console.log("--- Huffman Tree Levels ---");
  for (const level in levels) {
    console.log(`Level ${level}: ${levels[level].join(" | ")}`);
  }
}


function compareMetrics(freqMap, codeTable, totalChars)
{
  let entropy = 0;
  let avgLength = 0;

  for (const [char, count] of freqMap.entries()) {
    const p = count / totalChars;
    const codeLen = codeTable[char].length;

    entropy -= p * Math.log2(p);
    avgLength += p * codeLen;
  }

  console.log("--- Metrics Comparison ---");
  console.log(`Entropy (Theoretical Limit): ${entropy.toFixed(4)} bits/symbol`);
  console.log(`Average Huffman Length:     ${avgLength.toFixed(4)} bits/symbol`);
  console.log(`Efficiency:                 ${((entropy / avgLength) * 100).toFixed(2)}%`);
}


function packBits(bitString)
{
  const byteCount = Math.ceil(bitString.length / 8);
  const buffer = new Uint8Array(byteCount);

  for (let i = 0; i < bitString.length; i += 8)
  {
    const byteStr = bitString.slice(i, i + 8);
    const paddedByteStr = byteStr.padEnd(8, "0");
    buffer[i / 8] = parseInt(paddedByteStr, 2);
  }

  return buffer;
}


const freq = frequencyMap(input);
const tree = buildTree(freq);
const codes = buildCodes(tree);
const encodedBits = encode(input, codes);
const decoded = decode(encodedBits, tree);

const originalBits = input.length * 8;
const compressedBits = encodedBits.length;


console.log("Input:", input);
console.log("Code table:", codes);
console.log("Original bits:", originalBits);
console.log("Encoded bits:", compressedBits);
console.log("Compression ratio:", (originalBits / compressedBits).toFixed(3));
console.log("Round-trip equal:", decoded === input);

console.log("\n ######## ex1: \n");
printTreeLevelByLevel(tree);

console.log("\n ######## ex2: \n");
compareMetrics(freq, codes, input.length);

console.log("\n ######## ex3: \n");
const packedData = packBits(encodedBits);
console.log("--- Binary Packing ---");
console.log("Packed Bytes:", packedData);
console.log("Original Size (Bytes):", input.length);
console.log("Compressed Size (Bytes):", packedData.length);