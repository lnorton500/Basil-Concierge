import React, { Component } from 'react';

import Event from '../components/Event';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var description = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula diam congue ornare vulputate. Suspendisse accumsan pharetra metus, at mattis risus tincidunt in. Integer eget molestie erat, vel pulvinar enim. Aliquam pellentesque aliquam lorem, ultrices fermentum tellus tempor quis. Duis faucibus, ipsum quis posuere malesuada, libero nibh feugiat mi, quis condimentum dui sem et justo. Sed suscipit diam in turpis facilisis ultrices. Duis id est vel eros dapibus ultricies. Suspendisse vel ullamcorper sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque hendrerit, eros ac lobortis pretium, tortor mi porttitor nisi, sed aliquam mi nisi id ante. Etiam vulputate diam sit amet ligula scelerisque, nec elementum odio auctor.
        Nunc ultricies iaculis nunc, eget maximus eros auctor nec. Fusce quis turpis non turpis rutrum bibendum ut auctor magna. Nunc vitae lacus erat. Quisque fermentum varius auctor. Sed vel arcu imperdiet purus dignissim mollis vel ac ipsum. Nunc varius ullamcorper enim eget scelerisque. Donec faucibus tempor odio, sollicitudin mattis enim semper in. Mauris tristique felis sit amet tellus mattis tincidunt. Vestibulum euismod nibh erat.
        Nullam aliquet erat in metus ornare venenatis. Pellentesque cursus ligula ac quam lacinia, vel condimentum ligula efficitur. Nam sed ante quis lacus pellentesque fermentum quis ac diam. Suspendisse maximus nunc ac nibh aliquet, nec iaculis elit vulputate. Nulla blandit quam at sem gravida semper. Quisque in sem felis. Duis eu tellus hendrerit, tristique arcu quis, pulvinar nisi. Curabitur vel mattis ipsum. Vestibulum orci erat, semper et accumsan in, sodales sit amet leo. Fusce vehicula aliquet ligula, commodo auctor turpis aliquam ut.
        Integer quis porta est. Phasellus pharetra diam ipsum, vitae ornare ante placerat id. Ut ut nunc non velit tristique malesuada. Etiam ultrices egestas suscipit. Nullam imperdiet est nisl, ac congue nibh facilisis eget. Donec sodales lobortis elit nec luctus. Etiam vel fringilla est, a gravida quam.
        Sed non magna finibus, consectetur diam ac, varius purus. Mauris ut vehicula orci, quis accumsan tellus. Ut id tincidunt risus. Proin dapibus dictum tortor vel lacinia. Curabitur maximus vel tortor blandit consequat. Suspendisse hendrerit tincidunt dui. Phasellus vitae leo a nisl sodales iaculis ac vitae urna. Ut sed mattis odio. Suspendisse in eros nisl. Sed porttitor aliquam mauris, in gravida est suscipit non. Vivamus nec varius turpis. Donec lacus tellus, egestas ac gravida vitae, volutpat non eros. Aenean et vehicula diam. Vivamus elit dui, molestie mattis ornare ut, tempus non massa. 
        `

        

        return (
            <div className="screen">
                <div className="heading"><h1>Home</h1> </div>
                <div className="content">
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                    <Event name="Test event" description={description} interested="false" />
                </div>
            </div>
        );
    }
}

export default Home;