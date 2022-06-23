## initially
```mermaid
%%{init: { 'gitGraph': {
	'mainBranchName': 'Antonio'
}} }%%
gitGraph
	commit id:"start"
	branch Philipp
	commit id:"A"
	commit id:"B"
	commit id:"drop" type:highlight
```

## what you did
```mermaid
%%{init: { 'gitGraph': {
	'mainBranchName': 'Antonio'
}} }%%
gitGraph
	commit id:"start"
	branch Philipp
	commit id:"A"
	commit id:"B"
	commit id:"drop" type:highlight
	checkout Antonio
	merge Philipp
	commit id:"undo drop" type:reverse
```

## why everything looks like a mess
```mermaid
%%{init: { 'gitGraph': {
	'mainBranchName': 'Lyra'
}} }%%
gitGraph
	commit
	branch Antonio
	commit
	commit
	commit
	checkout Lyra
	commit
	checkout Antonio
	merge Lyra
	commit id:"start"
	branch Philipp
	commit id:"A"
	commit id:"B"
	commit id:"drop" type:highlight
	checkout Antonio
	merge Philipp
	commit id:"undo drop" type:reverse
	checkout Philipp
	commit
	checkout Antonio
	merge Philipp
	checkout Lyra
	merge Antonio
```
## isn't this easier to understand
```mermaid
%%{init: { 'gitGraph': {
	'mainBranchName': 'Lyra'
}} }%%
gitGraph
	commit
	commit
	branch Antonio
	commit
	commit
	commit
	commit id:"start"
	commit id:"A" type:highlight
	commit id:"B" type:highlight
	commit type:highlight
	checkout Lyra
	merge Antonio
```
