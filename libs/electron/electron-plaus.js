const { useState, useEffect} = React;

const Input = ({ placeholder, onChange, onHover, onFocus, onBlur, onDoubleClick, className, style, animate }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            onMouseOver={onHover}
            onDoubleClick={onDoubleClick}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${className} animate__animated ${animate ? `animate__${animate}` : ''}`} // Adicionando o prefixo animate__ corretamente
            style={style}
        />
    );
};

const Text = ({ children, onHover, onDoubleClick, className, style, animate }) => {
    return (
        <p
            className={`${className} animate__animated ${animate ? `animate__${animate}` : ''}`} // Adicionando o prefixo animate__ corretamente
            style={style}
            onMouseOver={onHover}
            onDoubleClick={onDoubleClick}
        >
            {children}
        </p>
    );
};

const View = ({ children, onHover, onDoubleClick, className, style, animate }) => {
    return (
        <div
            className={`${className} animate__animated ${animate ? `animate__${animate}` : ''}`} // Adicionando o prefixo animate__ corretamente
            style={style}
            onMouseOver={onHover}
            onDoubleClick={onDoubleClick}
        >
            {children}
        </div>
    );
};

const Image = ({ src, alt, width, height, onHover, onDoubleClick, className, style, animate }) => {
    return (
        <img
            src={"../../static/" + src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} animate__animated ${animate ? `animate__${animate}` : ''}`} // Adicionando o prefixo animate__ corretamente
            style={style}
            onMouseOver={onHover}
            onDoubleClick={onDoubleClick}
        />
    );
};

const Button = ({ title, onClick, onDoubleClick, onHover, className, style, icon, animate }) => {
    return (
        <button
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            onMouseOver={onHover}
            className={`${className} eletronText animate__animated ${animate ? `animate__${animate}` : ''}`} // Adicionando o prefixo animate__ corretamente
            style={style}
        >
            {icon && <i className={`icon ${icon}`}></i>}
            <span className="title">{title}</span> {/* Correção de spa para span */}
        </button>
    );
};


const QRCodeGenerator = ({ text, className, style, animate}) => {
    useEffect(() => {
        // Limpar QRCode anterior
        document.getElementById('qrcode').innerHTML = '';

        if (text) {
            // Instancia um novo QRCode quando o texto mudar
            new QRCode(document.getElementById('qrcode'), {
                text: text,
                width: 200,
                height: 200
            });
        }
    }, [text]);

    return (
        <div id="qrcode"
            className={`${className} animate__animated ${animate ? `animate__${animate}` : ''}`} // Adicionando o prefixo animate__ corretamente
            style={style}></div>
    );
};

const CustomMenu = ({ options, style = {} }) => {
    const customMenuRef = React.useRef(null);

    const handleContextMenu = (event) => {
        event.preventDefault();
        const menu = customMenuRef.current;
        menu.style.left = `${event.pageX}px`;
        menu.style.top = `${event.pageY}px`;
        menu.classList.remove('hidden');
    };

    const handleOptionClick = (callback) => {
        if (callback) callback();
        customMenuRef.current.classList.add('hidden'); // Fecha o menu após clicar
    };

    React.useEffect(() => {
        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('click', () => {
            customMenuRef.current.classList.add('hidden');
        });

        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('click', () => {
                customMenuRef.current.classList.add('hidden');
            });
        };
    }, []);

    return (
        <div
            ref={customMenuRef}
            id="custom-menu"
            className="hidden"
            style={{
                position: 'fixed',
                backgroundColor: style.backgroundColor || '#fff',
                border: style.border || '1px solid #ccc',
                padding: style.padding || '5px 0',
                boxShadow: style.boxShadow || '2px 2px 5px rgba(0, 0, 0, 0.1)',
                borderRadius: style.borderRadius || '0',
                zIndex: 1000,
            }}
        >
            <ul style={{ width: style.width || 'auto' }}>
                {options.map((option, index) => (
                    <li key={index} onClick={() => handleOptionClick(option.callback)}>
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const MarkdownRenderer = ({ children }) => {
    // Converte o texto Markdown em HTML
    const htmlContent = marked.parse(children);

    // Retorna o HTML renderizado
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const BarcodeGenerator = ({ value, format, className, style, animate }) => {
    useEffect(() => {
        // Limpa o código de barras anterior
        document.getElementById('barcode').innerHTML = '';

        if (value) {
            // Gera um novo código de barras
            JsBarcode("#barcode", value, {
                format: format,
                textMargin: 0,
                fontOptions: "bold"
            });
        }
    }, [value, format]);

    return (
        <svg id="barcode"
            className={`${className} animate__animated ${animate ? `animate__${animate}` : ''}`} // Adicionando o prefixo animate__ corretamente
            style={style}></svg>
    );
};
