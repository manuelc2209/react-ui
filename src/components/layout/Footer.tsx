export function Footer() {
    return (
        <footer data-testid="footer">
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-muted-foreground">
                    © <span>{new Date().getFullYear()}</span> Manuel Correia. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
