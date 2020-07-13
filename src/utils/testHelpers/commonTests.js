const commonTests = (render, useFirstChildAsSnapshot = true) => {
    it('does not log errors in console', () => {
        const spy = jest.spyOn(global.console, 'error')
        render()
        expect(spy).not.toHaveBeenCalled()
    })

    it('should render and match the snapshot',  () => {
        const { container } = render()
        expect(container).not.toBeNull()
        if(useFirstChildAsSnapshot) expect(container.firstChild).not.toBeNull()
        expect(
            useFirstChildAsSnapshot ? container.firstChild : container,
        ).toMatchSnapshot()
    });
}

export default commonTests;