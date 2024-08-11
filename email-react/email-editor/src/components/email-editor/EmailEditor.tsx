import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import { useRef, useState } from 'react'
import styles from './EmailEditor.module.scss'
import { applyStyle } from './apply-format'

export function EmailEditor() {
const [text, setText] = useState(`Hey, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, earum. Dolorem pariatur neque quaerat ab nihil tenetur nulla qui iure quos fugit repellendus aspernatur harum nisi nam, temporibus amet eveniet.`)

const [selectionStart, setSelectionStart] = useState(0);
const [selectionEnd, setSelectionEnd] = useState(0);

const textRef = useRef<HTMLTextAreaElement | null>(null)

const updataSelection = () => { 
	if (!textRef.current) return 
	setSelectionStart(textRef.current.selectionStart)
}

const applyFormat = (type: 'bold' | 'italic' | 'underline') => { 
	
	const selectedText = text.substring(selectionStart, selectionEnd)

	if (!selectedText) return 
	const before = text.substring(0,selectionStart)
	
	const after = text.substring(selectionEnd)

	setText(before + applyStyle(type, selectedText) + after)

}
	return ( 
		<div>
			<h1>Email editor</h1>
			<div className={styles.card}>
				<textarea 
				ref={textRef} 
				className={styles.editor} 
				contentEditable 
				spellCheck='false' 
				onSelect={updataSelection} 
				value={text} 
				onChange={e => setText(e.target.value)}>
					{text}
				</textarea>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button onClick={()=> setText('')}>
							<Eraser size={17}/>
						</button>
						<button onClick={() => applyFormat('bold')}>
							<Bold size={17}/>
						</button>
						<button onClick={() => applyFormat('italic')}>
							<Italic size={17}/>
						</button>
						<button onClick={() => applyFormat('underline')}>
							<Underline size={17}/>
						</button>
					</div>
					<button>Send now</button>
				</div>
			</div>
		</div>
	)
}